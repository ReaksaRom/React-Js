import { createSlice, configureStore } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "counter",
  initialState: {
    qty: 1,
    price: 1.5,
    totale: 1.5,
    description: "This is a product",
  },
  reducers: {
    incrementQty(state) {
      state.qty++;
      state.totale = state.qty * state.price;
    },
    decrementQty(state) {
      if (state.qty == 0) {
        return console.log("Can't decrement below 0");
      }
      state.qty--;
      state.totale = state.qty * state.price;
    },
    cancelStock(state) {
      state.qty = 0;
      state.totale = 0;
    },
  },
});

export const { incrementQty, decrementQty, cancelStock } = productSlice.actions;

const product = configureStore({
  reducer: {
    counter: productSlice.reducer,
  },
});

export default product;
