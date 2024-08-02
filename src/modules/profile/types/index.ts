export enum UserVisibility {
    PUBLIC = 'public',
    PRIVATE = 'private',
}

export interface ILocation {
    longitude: number;
    latitude: number;
}

export interface IUpdateProfileRequest {
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    address: string;
    birthDate: string;
    latitude: string;
    longitude: string;
    avatar: string;
    visibility: UserVisibility;
}

export interface IUpdateEmailRequest {
    email: string;
}

export interface IUpdateVerifyEmailRequest {
    code: number;
}
export interface IDeleteProfileRequest {
    username: string;
}



export interface IUser {
    id: number;
    email: string;
    username: string;
    provider: string;
    address: string;
    avatar: string;
    phone: string;
    isPhoneVerified: boolean;
    location: ILocation;
    bio: string;
    birthDate: string;
    firstName: string;
    lastName: string;
    visibility: UserVisibility;
}