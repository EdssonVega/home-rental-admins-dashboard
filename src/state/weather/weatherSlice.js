import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    weather: false,
    loading: false,
    error: null,
}

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
    getWeatherRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    },
    getWeatherFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    }
});

export const {getWeatherRequest, getWeatherSuccess , getWeatherFailure} = weatherSlice.actions;
export default weatherSlice.reducer;