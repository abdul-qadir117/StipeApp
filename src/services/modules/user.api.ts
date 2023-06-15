import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { UserType } from '../../types/auth.types';
import { baseQuery } from '../baseQuery';

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery,
  endpoints: build => ({
    getMe: build.query<UserType, string>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),
    userUpdate: build.mutation<any, { body: any }>({
      query: ({ body }) => ({
        url: '/users/',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useLazyGetMeQuery, useUserUpdateMutation } = userApi;
