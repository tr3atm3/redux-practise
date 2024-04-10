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
    initialRender(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    toggleCart(state) {
      return { ...state, isCartVisible: !state.isCartVisible };
    },
    addItemsToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.itemId === action.payload.id
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

        let newArray = [...state.cartItems];
        newArray[existingItemIndex] = updatedItem;

        return {
          ...state,
          cartItems: newArray,
        };
      }
    },
    removeItemsFromCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.itemId === action.payload
      );
      if (existingItem.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.itemId !== action.payload
          ),
        };
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) - 1,
          totalPrice:
            Number(existingItem.totalPrice) - Number(existingItem.price),
        };
        const existingItemIndex = state.cartItems.indexOf(existingItem);

        let newArray = [...state.cartItems];
        newArray[existingItemIndex] = updatedItem;

        return {
          ...state,
          cartItems: newArray,
        };
      }
    },
  },
});

export const {
  toggleCart,
  addItemsToCart,
  removeItemsFromCart,
  initialRender,
} = cartSlice.actions;
export default cartSlice.reducer;
