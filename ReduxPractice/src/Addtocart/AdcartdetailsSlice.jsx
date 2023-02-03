import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    total: 0,
    item: "",
    price: 0,
    productList: [],
  };
const CartDetailsSlice = createSlice({
    name:"CartdetailsSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.item = action.payload.product;
            state.price = action.payload.price;
            state.productList = [
                ...state.productList,
                {productname:state.item, productprice: state.price},

            ];
            state.total += Math.floor(Number(action.payload.price));
        },
    },
  });
  export const {addToCart} = CartDetailsSlice.actions;
  export default CartDetailsSlice.reducer;