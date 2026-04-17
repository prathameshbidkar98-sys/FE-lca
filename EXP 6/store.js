import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
name: "counter", // name of the slice
initialState: { value: 0 }, // the state
reducers: {
// reducers = functions that change state
increment: (state) => { state.value += 1 },
decrement: (state) => { state.value -= 1 }
}
});
// Actions to use in components
export const { increment, decrement } = counterSlice.actions;
// Reducer to give to store
export default counterSlice.reducer;
