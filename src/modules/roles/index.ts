import { roleApi, useGetRolesQuery } from './api/role.api';
import { IRole, RolesResponse } from './types/role.interface';
import { RoleTableEnum } from './types/roles.enum';

export type { IRole, RolesResponse };

export { RoleTableEnum, roleApi, useGetRolesQuery };
