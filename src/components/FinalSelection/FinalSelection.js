import React from 'react'
import "./FinalSelection.css"

export default function FinalSelection() {
    return (
        <div className="FinalSelection">
            <h2 className="FinalSelection__Title">Tu Pedido</h2>
            <div className="FinalSelection__Flex-Item">
                <h3 className="FinalSelection__Item-Description">Panty Isabel | COLOR: IS001 | Talla 32</h3>
                <h3 className="FinalSelection__Item-Price">Precio: $160.000</h3>
            </div>
            <hr/>
            <div className="FinalSelection__Flex">
            <h2>Subtotal:</h2> <h2>$160.000</h2>
            </div>
            <div className="FinalSelection__Flex"> 
            <h2>Envio:</h2>
            <h2> $7.000</h2> 
            </div>
            <hr/>
            <div className="FinalSelection__Flex"> 
            <h2>Total:</h2>
            <h2>$167.000</h2>
            </div>
        </div>
    )
}
