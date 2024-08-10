export interface IUser {
    Id: number;
    Email: string;
    FirstName: string;
    LastName: string;
    ImagePath: string;
    RoleId: number;
}

export interface IUsersResponse {
    data: IUser[];
    total: number;
}

export enum UserTableEnum {
    ID = 'id',
    EMAIL = 'email',
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    IMAGE_PATH = 'imagePath',
    ROLE_ID = 'roleId',
}