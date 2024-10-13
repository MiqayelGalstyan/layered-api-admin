import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '@app/api/buildBaseQuery';
import { IGetRolesPayload, RolesResponse } from '../types/role.interface';

export const roleApi = createApi({
    reducerPath: 'roleApi',
    baseQuery: buildBaseQuery(),
    endpoints: builder => ({
        getRoles: builder.query<
            RolesResponse,
            IGetRolesPayload
        >({
            query: params => ({
                url: '/roles/getRoles',
                params,
            }),
        }),
    }),
});

export const {
    useGetRolesQuery,
} = roleApi;
