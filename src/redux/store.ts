import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './services/users'
import { authApi } from './services/auth'
import { authUserLoginSlice, authUserRegisterSlice, authUserSlice } from './slices/authUser'

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
        authUserLogin: authUserLoginSlice,
        authUserRegister: authUserRegisterSlice,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),

})

setupListeners(store.dispatch)