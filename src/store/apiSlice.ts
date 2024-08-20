import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/?results=500",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
