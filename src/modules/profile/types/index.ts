export enum UserVisibility {
    PUBLIC = 'public',
    PRIVATE = 'private',
}

export interface ILocation {
    longitude: number;
    latitude: number;
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


export interface IEditProfilePayload {
    email: string;
    firstName: string;
    lastName: string;
    imagePath?: string;
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