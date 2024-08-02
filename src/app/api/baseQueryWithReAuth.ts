import { ITokensPayload, clear, setTokens } from '@modules/auth';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { RequestError } from '@app/types/error';
import { RootState } from '@app/store';
import { RequestErrorKey } from '@constants/requestError';
import { Mutex } from 'async-mutex';
import { buildBaseQuery } from './buildBaseQuery';

const mutex = new Mutex();

type BaseQueryFunction = (
  prefix?: string,
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;

export const baseQueryWithReAuth: BaseQueryFunction = (prefix = '') => {
  return async (args, api, extraOptions) => {
    const baseQuery = buildBaseQuery(prefix);

    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (typeof result === 'object' && 'error' in result) {
      const { error } = result as { error: RequestError };

      if (
        error.data &&
        typeof error.data === 'object' &&
        'error' in error.data &&
        (error.data.error === RequestErrorKey.TOKEN_EXPIRED ||
          error.data.error === RequestErrorKey.INVALID_TOKEN)
      ) {
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();
          try {
            console.log('Refreshing token');

            const authQuery = buildBaseQuery('auth');

            const {
              auth: { refreshToken },
            } = api.getState() as RootState;

            console.log('refreshToken', refreshToken);

            if (refreshToken) {
              const refreshResult = await authQuery(
                {
                  url: 'refresh-token',
                  method: 'POST',
                  body: { refreshToken },
                },
                api,
                extraOptions,
              );

              if (refreshResult.data) {
                console.log('store new token', refreshResult.data);
                api.dispatch(setTokens(refreshResult.data as ITokensPayload));

                result = await baseQuery(args, api, extraOptions);
              } else {
                console.log('Logout', refreshResult.error);
                api.dispatch(clear());
              }
            } else {
              console.log('No refresh token, logging out');
              api.dispatch(clear());
            }
          } catch (e) {
            console.log('Error', e);
          } finally {
            release();
          }
        } else {
          await mutex.waitForUnlock();
          result = await baseQuery(args, api, extraOptions);
        }
      }
    }

    return result;
  };
};
