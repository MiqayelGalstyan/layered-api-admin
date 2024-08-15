import { profileApi } from './api/profile.api';
import {
    IUser,
    IDeleteProfileRequest,
    ILocation,
    IUpdateEmailRequest,
    IUpdateVerifyEmailRequest,
    UserVisibility
} from './types';


export const {
    useGetUserProfileQuery,
    useLazyGetProfileQuery,
    useUpdateProfileMutation,
} = profileApi;

export {
    profileApi,
};


export type {
    IUser,
    IDeleteProfileRequest,
    ILocation,
    IUpdateEmailRequest,
    IUpdateVerifyEmailRequest,
    UserVisibility,
}