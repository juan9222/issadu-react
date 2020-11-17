import React, {createContext, useState,useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, storeClothToCart] = useState([])
    let localCart = JSON.parse(localStorage.getItem("myCart",cart))
    useEffect(() => {
        let filteredCart = cart.filter(function (element) {
            return element.quantity > 0;
        });
        localStorage.setItem("myCart",JSON.stringify(filteredCart))
    }, [cart])
    useEffect(() => {
        if (localCart) {
            storeClothToCart(localCart)
        }
        // eslint-disable-next-line
    }, [])
    return (
            <CartContext.Provider value={{cart,storeClothToCart}}>
                {props.children}
            </CartContext.Provider>
    )
}

export default CartProvider;


    //let localCart = localStorage.getItem("myCart")
    // const addItem = (item) => {
    //     //create a copy of our cart state, avoid overwritting existing state
    //     let cartCopy = [...cart];
    //     //assuming we have an ID field in our item
    //     let {id} = item;
    //     //look for item in cart array
    //     let existingItem = cartCopy.find(cartItem => cartItem.id === id);
    //     //if item already exists
    //     if (existingItem) {
    //         existingItem.quantity += item.quantity //update item
    //     } else { //if item doesn't exist, simply add it
    //       cartCopy.push(item)
    //     }
    //     //update app state
    //     storeClothToCart(cartCopy)
    //     //make cart a string and store in local space
    //     let stringCart = JSON.stringify(cartCopy);
    //     localStorage.setItem("myCart", stringCart)
        
    // }
    // const editItem = (itemID, amount) => {
    //     let cartCopy = [...cart]
    //     //find if item exists, just in case
    //     let existentItem = cartCopy.find(item => item.id === itemID);
    //     //if it doesnt exist simply return
    //     if (!existentItem) return
    //     //continue and update quantity
    //     existentItem.quantity += amount;
    //     //validate result
    //     if (existentItem.quantity <= 0) {
    //       //remove item  by filtering it from cart array
    //       cartCopy = cartCopy.filter(item => item.id !== itemID)
    //     }
    //     //update state and localState
    //     storeClothToCart(cartCopy);
    //     let cartString = JSON.stringify(cartCopy);
    //     localStorage.setItem('myCart', cartString);
    // }
    // const removeItem = (itemID) => {
    //     //create cartCopy
    //     let cartCopy = [...cart]
    //     cartCopy = cartCopy.filter(item => item.id !== itemID);
    //     //update state and local
    //     storeClothToCart(cartCopy);
    //     let cartString = JSON.stringify(cartCopy)
    //     localStorage.setItem('myCart', cartString)
    // }
    // useEffect(() => {
    //     localCart = JSON.parse(localCart)
    //     if (localCart) storeClothToCart(localCart)
    // }, [])