// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetUsersType } from '../../types/userTypes'
// import type { Pokemon } from './types'


// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
    endpoints: (builder) => ({
        getUsers: builder.query<GetUsersType, number>({
            query: (pageNumber) => `?page=${pageNumber}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi