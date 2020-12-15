import React from 'react'
import './ShoppingCart.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default function ShoppingCart() {
    const route = useSelector(state => state.route);
    return (
        <>
            {
                (route.route !== "/checkout" && route.route !== "/cart" && route.route !== "/customizer") &&
                <div className="ShoppingCart">
                <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                </Link>
                </div>
            }
        </>
    )
}
