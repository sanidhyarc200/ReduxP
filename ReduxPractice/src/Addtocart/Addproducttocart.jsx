import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartDetails } from "./Adcartdetails";
import { addToCart } from "./AdcartdetailsSlice";

export const AddToCartV = () => {
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((data) => {
            return data.json();
        })
        .then((data)=> setProduct(data))
    }, []);
    const Design = {
        display:"flex",
        flexWrap: "wrap",
        width: "30%",
        height:"50%",
        border:"2px soild blue"
    };

    return(
        <div>
            <h1>
                Product List
            </h1>
            <ul>
                {product.map((item,i) =>{
                    return(
                        <div>
                            <li style={Design} key={i}>
                                {item.title}
                                <button style={{color:"grey", border:"1px solid black"}}
                                 onClick={()=>dispatch(
                                    addToCart({ price:item.price, product:item.title})
                                )}>AddToCart</button>
                            </li>
                        </div>
                    );
                })}
            </ul>
            <CartDetails/>
        </div>
    );

};