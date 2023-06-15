import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_BASE_URL } from '@env';
import { getStorageData } from '../lib/asyncStorage';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: async headers => {
    const token = await getStorageData('token');
    console.log(token);
    if (token) {
      return headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
