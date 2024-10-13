import { IPagination } from "@app/types/pagination.types";
import { IPagedResult } from "@app/types/table.types";

export interface IRole {
    id: number;
    displayName: string;
}


export type RolesResponse = IPagedResult<IRole>;


export interface IGetRolesPayload extends IPagination {
    SearchQuery?: string;
}