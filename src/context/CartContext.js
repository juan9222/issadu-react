import React, {createContext, useState,useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, storeClothToCart] = useState([])
    useEffect(() => {
        if (cart.length > 0) {
            console.log("Cambió el carrito, actualiza",cart)
            localStorage.setItem("myCart", JSON.stringify(cart))
        }
        //let localStorageCart = localStorage.getItem("myCart")
        //storeClothToCart(JSON.parse(localStorageCart))
    }, [cart])
    return (
            <CartContext.Provider value={{cart,storeClothToCart}}>
                {props.children}
            </CartContext.Provider>
    )
}

export default CartProvider;