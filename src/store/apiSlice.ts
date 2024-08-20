import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/facts" }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
