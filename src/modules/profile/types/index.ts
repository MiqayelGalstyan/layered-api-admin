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
    firstName: string;
    lastName: string;
    imagePath: string;
    roleId: number;
    roleName: string;
}