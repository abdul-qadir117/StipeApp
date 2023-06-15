import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from '../baseQuery';

export const eventApi = createApi({
  reducerPath: 'event/api',
  baseQuery,
  endpoints: build => ({
    postEvent: build.mutation({
      query: body => ({
        url: '/event',
        method: 'POST',
        body: body,
      }),
    }),
    getEvents: build.query({
      query: (params: string) => ({
        url: `/event${params}`,
        method: 'GET',
      }),
    }),
    getEventById: build.query({
      query: id => ({
        url: `/event/${id}`,
        method: 'GET',
      }),
    }),
    updateEvent: build.mutation({
      query: ({ body, id }) => ({
        url: `/event/${id}`,
        method: 'PUT',
        body: body,
      }),
    }),
    updateTicket: build.mutation({
      query: ({ body, id }) => ({
        url: `/event/event-ticket/${id}`,
        method: 'PUT',
        body: body,
      }),
    }),
    deleteTicket: build.mutation({
      query: ({ id }) => ({
        url: `/event/event-ticket/${id}`,
        method: 'DELETE',
      }),
    }),
    addToWishList: build.mutation({
      query: body => ({
        url: '/wishlist',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  usePostEventMutation,
  useGetEventsQuery,
  useLazyGetEventByIdQuery,
  useGetEventByIdQuery,
  useUpdateEventMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
  useAddToWishListMutation,
} = eventApi;
