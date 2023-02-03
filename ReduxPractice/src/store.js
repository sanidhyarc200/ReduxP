import { configureStore } from "@reduxjs/toolkit";
import { addToCart } from "./Addtocart/AdcartdetailsSlice";

export const store =  configureStore({
    reducer:{
        addToCart: addToCart,
    },
});