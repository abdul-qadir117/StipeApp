import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from '../baseQuery';

export const groupApi = createApi({
  reducerPath: 'group/api',
  baseQuery,
  endpoints: build => ({
    followGroup: build.query({
      query: groupId => ({
        url: `group/follow/${groupId}`,
        method: 'GET',
      }),
    }),
    group: build.query<any, any>({
      query: () => ({
        url: '/group',
        method: 'GET',
      }),
    }),
    getUsers: build.query<any, any>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    getSubCategories: build.query<any, any>({
      query: () => ({
        url: '/sub-categories',
        method: 'GET',
      }),
    }),
    postgroup: build.mutation({
      query: body => ({
        url: '/group',
        method: 'POST',
        body: body,
      }),
    }),
    getGroup: build.query({
      query: id => ({
        url: `/group/${id}`,
        method: 'GET',
      }),
    }),
    updateGroup: build.mutation({
      query: ({ id, body }) => ({
        url: `group/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useLazyFollowGroupQuery,
  useGetUsersQuery,
  useGroupQuery,
  usePostgroupMutation,
  useGetSubCategoriesQuery,
  useGetGroupQuery,
  useLazyGetGroupQuery,
  useUpdateGroupMutation,
  useLazyGroupQuery,
} = groupApi;
