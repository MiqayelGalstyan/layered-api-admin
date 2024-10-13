import { IColumn } from "@app/types/table.types";
import { IRole } from "../types/role.interface";
import { RoleTableEnum } from "../types/roles.enum";

export const rolesColumns: IColumn<IRole>[] = [
    {
        fieldName: RoleTableEnum.ID,
        title: 'Id',
        sortable: true,
    },
    {
        fieldName: RoleTableEnum.DISPLAY_NAME,
        title: 'Name',
        sortable: true,
    },
]