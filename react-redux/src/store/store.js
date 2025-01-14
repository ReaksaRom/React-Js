import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    disretment(state) {
      if (state.value == 0) {
        return console.log("Value can't be less than 0");
      } else {
        state.value--;
      }
    },
  },
});

export const { increment, disretment } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export default store;
