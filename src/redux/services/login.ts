import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/login' }),
  endpoints: (builder) => ({
    loginApi: builder.mutation<string, { email: string, password: string }>({
      query: (data) => ({
        url: `/`,
        body: data,
        method: "POST"
      })
    }),
  }),
})

export const { useLoginApiMutation } = loginApi