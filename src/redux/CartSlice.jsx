// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Local storage uchun yordamchi funksiyalar
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

// Local storage'dan ma'lumotlarni olish
const getFromLocalStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error parsing local storage key “${key}”:`, error);
    return defaultValue;
  }
};

const initialState = {
  cart: getFromLocalStorage("cart", []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity, img, aksiya } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Agar item mavjud bo'lsa, quantity ni oshirish
        state.cart[existingItemIndex].quantity += quantity;
      } else {
        // Agar item mavjud bo'lmasa, yangi item qo'shish
        state.cart.push({ id, title, price, quantity, img, aksiya });
      }

      storeInLocalStorage(state.cart);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      storeInLocalStorage(state.cart);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity = quantity;
        if (quantity <= 0) {
          // Agar quantity 0 yoki past bo'lsa, item ni olib tashlash
          state.cart.splice(existingItemIndex, 1);
        }
        storeInLocalStorage(state.cart);
      }
    },
  },
});

export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
