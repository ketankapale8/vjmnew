import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null , user:null},
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken ,foundUser} = action.payload
            state.token = accessToken
            state.user = foundUser
        },
        logOut: (state, action) => {
            state.token = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token