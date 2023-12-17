import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthLogIn, AuthUser } from '../../types/authTypes'
import { API_KEY } from '../../secret'
import { getCookie } from '../../utils/getCookie'


export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth',],
  baseQuery: fetchBaseQuery({ baseUrl: API_KEY }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthLogIn, { email: string, password: string }>({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body,
        credentials: "omit",
      }),
      transformResponse: (fetchBaseQuery: { token: string }) => {
        console.log({ fetchBaseQuery })
        document.cookie = "auth=" + fetchBaseQuery.token
        return fetchBaseQuery
      },
      // transformErrorResponse: (baseQueryReturnValue) => baseQueryReturnValue.data || 'Failed to Login',
      transformErrorResponse: (baseQueryReturnValue: { status: number, data: { error: string } }): string => baseQueryReturnValue.data?.error || 'Failed to Login',
      invalidatesTags: ["Auth"]
    }),
    loginUser: builder.mutation<AuthLogIn, { email: string, password: string }>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
        credentials: "omit",
      }),
      transformResponse: (fetchBaseQuery: { token: string }) => {
        console.log({ fetchBaseQuery })
        document.cookie = "auth=" + fetchBaseQuery.token
        return fetchBaseQuery
      },
      // transformErrorResponse: (baseQueryReturnValue) => baseQueryReturnValue.data || 'Failed to Login',
      transformErrorResponse: (baseQueryReturnValue: { status: number, data: { error: string } }): string => baseQueryReturnValue.data?.error || 'Failed to Login',
      invalidatesTags: ["Auth"]
    }),
    logoutUser: builder.mutation<string, void>({
      query: (body) => ({
        url: 'logout',
        method: 'POST',
        body,
      }),
      onQueryStarted() {
        document.cookie = `Authorization=`
      },
      transformErrorResponse: (baseQueryReturnValue) => baseQueryReturnValue.data || 'Failed to Logout',
      invalidatesTags: ["Auth"]
    }),
    authUser: builder.query<any, void>({
      query: () => ({
        url: 'me',
        // credentials: 'include',
      }),
      transformResponse: (response): { isAuth: boolean } => {
        const cookie = getCookie("auth");
        if (cookie) return { isAuth: true }
        return { isAuth: false }
      },
      providesTags: ['Auth']
    }),
  }),

})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useAuthUserQuery } = authApi