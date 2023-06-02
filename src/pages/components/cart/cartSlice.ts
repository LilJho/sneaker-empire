import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface stateType {
  id: string;
  name: string;
  price: number;
  images: string;
  trending: boolean;
  unisex: boolean;
  color: string;
  gender: string;
}

const initialState: stateType[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<stateType>) => {
      state.push(action.payload);
    },
    removeToCart: (state, action: PayloadAction<string>) => {
      state = state.filter((shoe) => shoe.id !== action.payload);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
