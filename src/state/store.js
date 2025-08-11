import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import weatherReducer from "./weather/weatherSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherReducer,
    }
})