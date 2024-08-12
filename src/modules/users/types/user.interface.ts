import { IPagination } from "@app/types/pagination.types";
import { IPagedResult } from "@app/types/table.types";

export interface IUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    imagePath: string;
    roleId: number;
    roleName: string;
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
    ROLE_NAME = 'roleName',
    ACTIONS = 'actions',
}