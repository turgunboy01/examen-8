import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CartSlice";
import WishlistSlice from "./WishlistSlice";
// import TodoSlice from "./test";
const Store = configureStore({
  reducer: {
    cart: CardSlice,
    like: WishlistSlice,
    // todos: TodoSlice,
  },
});

export default Store;
