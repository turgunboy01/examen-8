import { createSlice } from "@reduxjs/toolkit";
const stroreInLocalStorage = (data) => {
  localStorage.setItem("like", JSON.stringify(data));
};
const WishlistSlice = createSlice({
  name: "like",
  initialState: {
    data: [],
  },
  reducers: {
    addToWishCart(state, action) {
      const existingItem = state.data.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalprice,
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
        stroreInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        stroreInLocalStorage(state.data);
      }
    },
    removeWish: (state, action) => {
      const tempCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = tempCart;
      stroreInLocalStorage(state.data);
    },
  },
});
export const { addToWishCart, removeWish } = WishlistSlice.actions;
export default WishlistSlice.reducer;
