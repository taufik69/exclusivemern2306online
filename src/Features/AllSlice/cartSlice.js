import { createSlice } from "@reduxjs/toolkit";
import { successToast, errorToast, infoToast } from "../../helpers/Toast";
const initialState = {
  value: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalItem: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const findItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });

      if (findItem >= 0) {
        state.value[findItem].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.value));
        infoToast(`${action.payload.name} is Again Add to Cart`);
      } else {
        state.value.push({ ...action.payload, cartQuantity: 1 });
        localStorage.setItem("cartItem", JSON.stringify(state.value));
        successToast(`${action.payload.name} is Add to Cart`);
      }
    },
    removeCart: (state, action) => {
      const filteritem = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = filteritem;
      localStorage.setItem("cartItem", JSON.stringify(state.value));
      errorToast(`${action.payload.name} is Remove Add to Cart`);
    },

    increment: (state, action) => {
      const findindex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (findindex >= 0) {
        state.value[findindex].cartQuantity += 1;
        infoToast(`${action.payload.name} agian added`);
        localStorage.setItem("cartItem", JSON.stringify(state.value));
      }
    },
    decrement: (state, action) => {
      const findindex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (state.value[findindex].cartQuantity > 1) {
        state.value[findindex].cartQuantity -= 1;
        infoToast(`${action.payload.name} remove quantitiy`);
        localStorage.setItem("cartItem", JSON.stringify(state.value));
      }
    },
    getTotal: (state, action) => {
      const cartAllItemReduce = state.value.reduce(
        (cartinfo, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalCartPrice = cartQuantity * price;
          cartinfo.totalamount += totalCartPrice;
          cartinfo.totalItem += cartQuantity;
          return cartinfo;
        },
        {
          totalItem: 0,
          totalamount: 0,
        }
      );
      state.cartTotalAmount = cartAllItemReduce.totalamount;
      state.cartTotalItem = cartAllItemReduce.totalItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtocart, removeCart, increment, decrement, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
