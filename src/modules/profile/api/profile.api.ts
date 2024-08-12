import { createApi } from '@reduxjs/toolkit/query/react';
import {
    IDeleteProfileRequest,
    IUpdateEmailRequest,
    IUpdateProfileRequest,
    IUpdateVerifyEmailRequest,
    IUser,
} from '../types';
import { baseQueryWithReAuth } from '@app/api/baseQueryWithReAuth';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    keepUnusedDataFor: 0,
    baseQuery: baseQueryWithReAuth(),
    tagTypes: ['UserProfile'],
    endpoints: builder => ({
        getProfile: builder.query<
            IUser,
            void
        >({
            query: () => '/profile',
        }),
        getUserProfile: builder.query<IUser & { isFriend: boolean }, number>({
            query: userId => `/profile/${userId}`,
            providesTags: ['UserProfile'],
        }),
        updateProfile: builder.mutation<void, Partial<IUpdateProfileRequest>>({
            query: body => ({
                url: '/profile',
                method: 'PUT',
                body,
            }),
        }),
        verifyEmail: builder.mutation<void, Partial<IUpdateVerifyEmailRequest>>({
            query: body => ({
                url: '/profile/email/verify',
                method: 'PUT',
                body,
            }),
        }),
        deleteProfile: builder.mutation<void, IDeleteProfileRequest>({
            query: body => ({
                url: '/profile',
                method: 'DELETE',
                body,
            }),
        }),
        updateEmail: builder.mutation<void, IUpdateEmailRequest>({
            query: body => ({
                url: '/profile/email',
                method: 'PUT',
                body,
            }),
        }),
        updatePhone: builder.mutation<void, string>({
            query: phone => ({
                url: '/profile/phone',
                method: 'PUT',
                body: { phone },
            }),
        }),
        verifyPhone: builder.mutation<void, string>({
            query: code => ({
                url: '/profile/phone/verify',
                method: 'PUT',
                body: { code },
            }),
        }),
    }),
});
