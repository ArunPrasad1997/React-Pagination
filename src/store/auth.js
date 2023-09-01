import { createSlice } from "@reduxjs/toolkit";

const authStates = { isLoading: false }

const authSlice = createSlice({
    name: 'authenticated',
    initialState: authStates,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
