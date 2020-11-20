import React, {useContext,useState,useEffect} from 'react'
import APIService from '../../services/APIService.js'

import "./FinalSelection.css"
import {CartContext} from '../../context/CartContext'

export default function FinalSelection({province}) {
    const {cart} = useContext(CartContext);
    const [shippingPricesObject, storeShippingPricesObject] = useState(0)
    const [shippingPrice, setShippingPrice] = useState(0)
    async function getShippingPrices() {
        let response = await APIService.getShippingPrices()
        storeShippingPricesObject(response)
    }
    useEffect(()=> {
        getShippingPrices()
    },[]) 
    useEffect(() => {
        switch (province) {
            case "Cali":
                setShippingPrice(shippingPricesObject.local)
                break;
            case "Valle del Cauca":
                setShippingPrice(shippingPricesObject.regional)
                break;
            case "":
                setShippingPrice(0)
                break;
            default:
                setShippingPrice(shippingPricesObject.national)
                break;
        }
    }, [province,shippingPricesObject])
    return (
        <div className="FinalSelection">
            <h2 className="FinalSelection__Title">Tu Pedido</h2>
            {
                cart.map((cartElement, index) => (
                (cartElement.quantity > 0) &&
                <div key={index} className="FinalSelection__Flex-Item">
                    <h3 className="FinalSelection__Item-Description">{cartElement.type} {cartElement.model} |  Color: {cartElement.color} | Talla: {cartElement.size} | Cantidad: {cartElement.quantity}</h3>
                    <h3 className="FinalSelection__Item-Price">Precio: ${cartElement.priceDiscount*cartElement.quantity}</h3>
                    <hr/>
                </div>
                ))
            }
            <div className="FinalSelection__Flex">
            <h2>Subtotal:</h2> <h2>${cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) => prev + next, 0)}</h2>
            </div>
            <div className="FinalSelection__Flex"> 
            <h2>Envio:</h2>
            <h2>${shippingPrice}</h2> 
            </div>
            <hr/>
            <div className="FinalSelection__Flex"> 
            <h2>Total:</h2>
            <h2>${(cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) => prev + next, 0))+shippingPrice}</h2>
            </div>
        </div>
    )
}
