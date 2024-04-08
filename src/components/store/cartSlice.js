import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartVisible: false,
    cartItems: [],
    totalQuantity: 0,
  },
  reducers: {
    toggleCart(state) {
      return { ...state, isCartVisible: !state.isCartVisible };
    },
    addItemsToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              itemId: action.payload.id,
              price: action.payload.price,
              quantity: 1,
              totalPrice: action.payload.price,
              name: action.payload.title,
            },
          ],
        };
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) + 1,
          totalPrice:
            Number(existingItem.totalPrice) + Number(existingItem.price),
        };
        const existingItemIndex = state.cartItems.indexOf(existingItem);
        let newArray = state.cartItems;
        newArray[existingItemIndex] = updatedItem;
        return {
          ...state,
          cartItems: newArray,
        };
      }
    },
    removeItemsFromCart(state, action) {},
  },
});

export const { toggleCart, addItemsToCart, removeItemsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;