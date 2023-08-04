import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      // reux-toolkit user immer under the hood and that is why we don't use the spread operator with the old state
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
console.log("cakeSlice => cakeSlice.actions => ", cakeSlice.actions);
console.log("cakeSlice => cakeSlice => ", cakeSlice);
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
