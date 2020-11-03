import React from 'react';
import './PreCheckout.css'

const PreCheckout = () => {
    return (
        <div className="PreCheckout">
        <hr className="Bikini__HR" />
        <div className="Bikini__Flex-Checkout">
        <div className="Bikini__Subtotal">
            <h2 className="Bikini__Subtotal-Title">SUBTOTAL: $140.000</h2>
            <div className="Bikini__Spacing">
                <input type="radio" id="Cali" name="Envio" value="Cali" />
                <label className="Bikini__Send" htmlFor="Cali">Envío Cali y Palmira&nbsp;&nbsp;$7.000</label> 
            </div>
            <div className="Bikini__Spacing">
                <input type="radio" id="Nacional" name="Envio" value="Nacional" />
                <label className="Bikini__Send" htmlFor="Nacional">Envío Nacional&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$9.000</label>
            </div>
        </div>
        <div>
            <h2 className="Bikini__Total">TOTAL: $147.000</h2>
            <div className="Bikini__Buy">COMPRAR</div>
            <h3 className="Bikini__Payment">TODOS LOS MEDIOS DE PAGO</h3>
            </div>
        </div>
        </div>
    );
}

export default PreCheckout;
