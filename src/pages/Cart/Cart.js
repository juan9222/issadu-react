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

                <tr className="Cart__Table-End">
                    <th></th>
                    <th></th>
                    <th>Subtotal de la orden</th>
                    <th>${cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) => prev + next, 0)}</th>
                    <th><Link className="ShoppingCart__Buy" to="/checkout">Finalizar Pedido</Link></th>
                </tr>
                </tbody>
            </table>
            <div className="CartMobile">
            {
                    cart.map((cartElement,index)=>(
                        (cartElement.quantity > 0) &&
                        <div key={index}>
                            <div className="CartMobile__Text">Producto: {cartElement.type} {cartElement.model}</div>
                            <div className="CartMobile__Text">Color: {cartElement.color} </div>
                            <div className="CartMobile__Text">Talla: {cartElement.size} </div>
                            <div className="CartMobile__Text">Precio: ${cartElement.priceDiscount}</div>
                            <div className="CartMobile__Text">Cantidad {cartElement.quantity}</div>
                            <div className="CartMobile__Text">Quitar: <FontAwesomeIcon  onClick={remove(cartElement.id)} icon={faTrashAlt} /></div>
                            <div className="CartMobile__Text">Valor Final: l${cartElement.priceDiscount*cartElement.quantity}</div>
                            <hr/>
                        </div>
                    ))
            }
            <div className="CartMobile__Text">Subtotal de la orden</div>
            <div className="CartMobile__Text">${cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) => prev + next, 0)}</div>
            <Link className="ShoppingCart__Buy" to="/checkout">Finalizar Pedido</Link>
            </div>
            <h3 className="Cart__Advice">los costos de envío y los impuestos se añaden durante el pago.</h3>

        </div>
    )
}
