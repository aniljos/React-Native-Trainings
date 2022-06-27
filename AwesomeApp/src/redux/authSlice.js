import {createSlice} from '@reduxjs/toolkit';


const initData = {
    isAuthenticated: false,
    accessToken : ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initData,
    reducers: {
        setAuthData: (state, action)=>{

            state.isAuthenticated = action.payload.isAuthenticated;
            state.accessToken = action.payload.accessToken
        }
    }
});

export const {setAuthData} = authSlice.actions;
export const authReducer = authSlice.reducer;

