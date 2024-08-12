import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '@app/api/buildBaseQuery';
import { IGetUsersPayload, UsersResponse } from '../types/user.interface';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: buildBaseQuery(),
    endpoints: builder => ({
        getUsers: builder.query<
            UsersResponse,
            IGetUsersPayload
        >({
            query: params => ({
                url: '/users/getAllUsers',
                params,
            }),
        }),
        removeUser: builder.mutation<boolean, number>({
            query: id => ({
                url: `/user/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useLazyGetUsersQuery,
    useGetUsersQuery,
    useRemoveUserMutation,
} = userApi;
