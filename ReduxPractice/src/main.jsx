import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from "./store";
import { Provider } from 'react-redux'
import { AddToCartV } from './Addtocart/Addproducttocart'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AddToCartV />
  </Provider>,
)
