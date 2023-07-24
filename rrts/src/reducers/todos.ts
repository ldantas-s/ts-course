import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

const todoSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query<Todo[], void>({
        query: () => '/todos',
      }),
    };
  },
});

export const { middleware, reducerPath, reducer, endpoints } = todoSlice;
