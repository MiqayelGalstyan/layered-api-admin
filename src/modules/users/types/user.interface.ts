import { IPagination } from "@app/types/pagination.types";
import { IPagedResult } from "@app/types/table.types";

export interface IUser {
    Id: number;
    Email: string;
    FirstName: string;
    LastName: string;
    ImagePath: string;
    RoleId: number;
}

export type UsersResponse = IPagedResult<IUser>;


export interface IGetUsersPayload extends IPagination {
    SearchQuery?: string;
}

export enum UserTableEnum {
    ID = 'id',
    EMAIL = 'email',
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    IMAGE_PATH = 'imagePath',
    ROLE_ID = 'roleId',
}