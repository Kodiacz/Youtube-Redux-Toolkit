const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
      builder.addCase(cakeActions.ordered, (state) => {
         state.numOfIcecreams--;
      });
   },
});

module.exports = iceCreameSlice.reducer;
module.exports.icecreamActions = iceCreameSlice.actions;
