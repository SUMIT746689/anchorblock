import { createSlice } from '@reduxjs/toolkit'

interface authUser {
    isAuth: boolean
}

const initialState = { isAuth: false } as authUser

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        authSuccess(state) {
            state.isAuth = true
        },
        authFailed(state) {
            state.isAuth
        }
    },
})

export const { authSuccess, authFailed } = authUserSlice.actions
export default authUserSlice.reducer