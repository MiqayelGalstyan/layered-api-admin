import { IColumn } from "@app/types/table.types";
import { IUser, UserTableEnum } from "../types/user.interface";
import { Button } from "@mui/material";

export const usersColumns: IColumn<IUser>[] = [
    {
        fieldName: UserTableEnum.ID,
        title: 'Id',
        sortable: true,
        columnWidth: 130,
    },
    {
        fieldName: UserTableEnum.ROLE_NAME,
        title: 'Role',
        sortable: true,
        columnWidth: 130,
    },
    {
        fieldName: UserTableEnum.EMAIL,
        title: 'Email',
        sortable: true,
        columnWidth: 130,
    },
    {
        fieldName: UserTableEnum.FIRST_NAME,
        title: 'First Name',
        sortable: true,
        columnWidth: 130,
    },
    {
        fieldName: UserTableEnum.LAST_NAME,
        title: 'Last Name',
        sortable: true,
        columnWidth: 130,
    },
    {
        fieldName: UserTableEnum.IMAGE_PATH,
        title: 'Image',
        sortable: false,
        columnWidth: 130,
    },
]