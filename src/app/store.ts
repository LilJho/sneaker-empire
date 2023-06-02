import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/components/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
