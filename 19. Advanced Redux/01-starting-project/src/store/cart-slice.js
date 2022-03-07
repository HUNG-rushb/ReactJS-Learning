import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], quantity: 0, totalAmount: 0 },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++;

      if (!existingItem) {
        state.items.push({
          itemID: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantiy += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity--;

      if (existingItem === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        existingItem.quantiy--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
