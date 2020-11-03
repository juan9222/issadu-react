import React from 'react'
import "./Cart.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function Cart() {
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
                <tr>
                    <th>Fabiana</th>
                    <th>$150.000</th>
                    <th><button>+</button> 2 <button>-</button></th>
                    <th>$300.000</th>
                    <th><FontAwesomeIcon icon={faTrashAlt} /></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Subtotal de la orden</th>
                    <th>$300.000</th>
                    <th><Link className="ShoppingCart__Buy" to="/checkout">Finalizar Pedido</Link></th>
                </tr>
                </tbody>
            </table>
            <h3>los costes de envío y los impuestos se añaden durante el pago.</h3>
        </div>
    )
}
