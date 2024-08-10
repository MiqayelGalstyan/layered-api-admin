
import { userApi, useLazyGetUsersQuery, useGetUsersQuery } from './api/user.api';
import { IGetUsersPayload, IUser, UserTableEnum, UsersResponse } from './types/user.interface';

export type { IGetUsersPayload, IUser, UserTableEnum, UsersResponse };

export { userApi, useLazyGetUsersQuery, useGetUsersQuery };