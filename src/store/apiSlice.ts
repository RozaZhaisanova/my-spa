import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://numbersapi.com/" }), // Замените на нужный API
  endpoints: (builder) => ({
    getItems: builder.query<any[], void>({
      query: () => "/items", // Замените на нужный эндпоинт
    }),
  }),
});

export const { useGetItemsQuery } = apiSlice;
