import { profileApi } from './api/profile.api';
import {
    IUser,
    IDeleteProfileRequest,
    ILocation,
    IUpdateEmailRequest,
    IUpdateProfileRequest,
    IUpdateVerifyEmailRequest,
    UserVisibility
} from './types';


export const {
    useGetUserProfileQuery,
    useLazyGetProfileQuery,
} = profileApi;

export {
    profileApi,
};


export type {
    IUser,
    IDeleteProfileRequest,
    ILocation,
    IUpdateEmailRequest,
    IUpdateProfileRequest,
    IUpdateVerifyEmailRequest,
    UserVisibility,
}