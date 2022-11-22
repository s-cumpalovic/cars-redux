import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload.cars;
    },
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
