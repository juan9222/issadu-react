import React, {useContext} from 'react'
import "./Cart.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {CartContext} from '../../context/CartContext.js'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function Cart() {
    const {cart,storeClothToCart} = useContext(CartContext);
    const remove = clothId => onClickEvent => {
        onClickEvent.preventDefault()
        let newCart = [...cart]; // copying the old datas array
        newCart.forEach((newCartElement,index) => {
            if (newCartElement.id === clothId){
                newCart[index].quantity -= 1 
            }
        })
        storeClothToCart(newCart)
    }
    return (
        <div className="Cart">
            <h1 className="Cart__Title">Tu Carrito de Compras</h1>
            <table className="Cart__Table">
                <thead>
                <tr className="Cart__Table-Head">
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Remover</th>
                </tr>
                </thead>
                <tbody className="Cart__Table-Body">
                
                {
                    cart.map((cartElement,index)=>(
                        (cartElement.quantity > 0) &&
                        <tr key={index}>
                            <th>{cartElement.type} {cartElement.model} |  Color: {cartElement.color} | Talla: {cartElement.size}</th>
                            <th>${cartElement.priceDiscount}</th>
                            <th>{cartElement.quantity}</th>
                            <th>${cartElement.priceDiscount*cartElement.quantity}</th>
                            <th><FontAwesomeIcon  onClick={remove(cartElement.id)} icon={faTrashAlt} /></th>
                        </tr>
                    ))
                }

                <tr>
                    <th></th>
                    <th></th>
                    <th>Subtotal de la orden</th>
                    <th>${cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) => prev + next, 0)}</th>
                    <th><Link className="ShoppingCart__Buy" to="/checkout">Finalizar Pedido</Link></th>
                </tr>
                </tbody>
            </table>
            <h3>los costes de envío y los impuestos se añaden durante el pago.</h3>
        </div>
    )
}
