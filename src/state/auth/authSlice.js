import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginRequest: (state) => {
            state.loading = true;
            state.error= null;
        },
        loginSucces: (state,action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        loginFailure: (state,action) => {
            state.loading = false;
            state.error= action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const {loginRequest, loginSucces , loginFailure, logout} = authSlice.actions;
export default authSlice.reducer;