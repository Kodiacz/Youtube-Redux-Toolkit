import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIcecreams: 20,
};

const iceCreameSlice = createSlice({
  name: "icecreame",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //    extraReducers: {
  //       ["cake/ordered"]: (state) => {
  //          state.numOfIcecreams--;
  //       },
  //    },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceCreameSlice.reducer;
export const { ordered, restocked } = iceCreameSlice.actions;
