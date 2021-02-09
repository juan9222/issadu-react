import React, {useContext} from 'react';
import {OnePieceContext} from '../../context/OnePieceContext.js'
import {TopContext} from '../../context/TopContext.js'
import {PantyContext} from '../../context/PantyContext.js'
import {CartContext} from '../../context/CartContext.js'
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './PreCheckout.css'


const PreCheckout = ({mode, piece}) => {
    const {onePieceObject} = useContext(OnePieceContext);
    const {topObject} = useContext(TopContext);
    const {pantyObject} = useContext(PantyContext);
    const {cart,storeClothToCart} = useContext(CartContext);
    
    const addToCart = (id,clothType, clothSubType) => {
        if (clothType === "Bikini" && clothSubType === "Top") {
            let newTopObject = null
            newTopObject = { ...topObject, id: id , quantity: 1 };            
            storeClothToCart(oldCart => [
                ...oldCart,
                newTopObject,
            ])
        }
        if (clothType === "Bikini" && clothSubType === "Panty") {
            let newPantyObject = null
            newPantyObject = { ...pantyObject, id: id , quantity: 1 };  
            storeClothToCart(oldCart => [
                ...oldCart,
                newPantyObject,
            ])
        }
        if (clothType === "One Piece") {
            let newOnePieceObject = null
            newOnePieceObject = { ...onePieceObject, id: id , quantity: 1 }; 
            storeClothToCart(oldCart => [
                ...oldCart,
                newOnePieceObject,
            ])
        }
    }
    const add = clothId => onClickEvent => {
        onClickEvent.preventDefault()
        let newCart = [...cart]; // copying the old datas array
        newCart.forEach((newCartElement,index) => {
            if (newCartElement.id === clothId){
                newCart[index].quantity += 1 
            }
        })
        storeClothToCart(newCart)
    }
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
        <div className="PreCheckout">
        <hr className="Bikini__HR" />
        <div className="PreCheckout__Price">
            <h2 className="PreCheckout__Price-Title">PRECIO DE TU PRENDA</h2>
            {
                (mode === "Bikini" && piece === "Top") &&
                <div>
                    <h2 className="PreCheckout__Price-Title">TOP</h2>
                    <h3>Sin Descuento: ${new Intl.NumberFormat("es-ES").format(topObject.price)}</h3>
                    <h3 className="PreCheckout__Price-Discount">Con Descuento(30%): ${new Intl.NumberFormat("es-ES").format(topObject.priceDiscount)} </h3>
                </div>
            }
            {
                (mode === "Bikini" && piece === "Panty") &&
                <div>
                    <h2 className="PreCheckout__Price-Title">PANTY</h2>
                    <h3>Sin Descuento: ${new Intl.NumberFormat("es-ES").format(pantyObject.price)}</h3>
                    <h3 className="PreCheckout__Price-Discount">Con Descuento(30%): ${new Intl.NumberFormat("es-ES").format(pantyObject.priceDiscount)}</h3>
                </div>
            }
            {
                (mode === "One Piece") &&
                <div>
                    <h2 className="PreCheckout__Price-Title">ENTERIZO</h2>
                    <h3>Sin Descuento: ${new Intl.NumberFormat("es-ES").format(onePieceObject.price)}</h3>
                    <h3 className="PreCheckout__Price-Discount">Con Descuento(30%): ${new Intl.NumberFormat("es-ES").format(onePieceObject.priceDiscount)}</h3>
                </div>
            }
        </div>
        <br/>
        <br/>
        <div className="Bikini__Flex-Checkout">
        <div className="Bikini__Subtotal">
            <h2 className="Bikini__Subtotal-Title">RESUMEN</h2>
            {
                (cart.length > 0) &&
                        <div className="Precheckout__Column">
                            {
                            cart.map((element, index) => (
                                (element.quantity > 0) &&
                                <div key={element.id}>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Tipo:</span> {element.type}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Modelo: </span>{element.model}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Talla: </span>{element.size}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Color: </span>{element.color}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Precio sin descuento:</span> {"$" + new Intl.NumberFormat("es-ES").format(element.price)}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Precio con descuento:</span> {"$" + new Intl.NumberFormat("es-ES").format(element.priceDiscount)}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Precio final:</span> {"$" + new Intl.NumberFormat("es-ES").format(element.priceDiscount*element.quantity)}</h3>
                                    <h3 className="Precheckout__Description"><span className="Precheckout__Description-Bold">Cantidad:</span> {element.quantity}</h3>
                                    <div className="PreCheckout__Flex">
                                        <div className="PreCheckout__Button" name="add" onClick={add(element.id)} >Añadir más</div>
                                        <div className="PreCheckout__Button" name="remove" onClick={remove(element.id)}>Quitar</div>
                                    </div>
                                    <hr className="Precheckout__HR"/>
                                </div>
                             ))
                            }
                        </div>
            }
        </div>
        <div>
            <h2 className="Bikini__Total">TOTAL: ${new Intl.NumberFormat("es-ES").format(cart.map(element => element.priceDiscount*element.quantity).reduce((prev, next) =>  prev + next , 0))}</h2>
            <div className="Bikini__Buy" onClick={() => addToCart(uuidv4(),mode,piece)}>AGREGAR AL CARRITO</div>
            <Link to="/checkout">
                <div className="Bikini__Buy">FINALIZAR COMPRA</div>
            </Link>
            <h3 className="Bikini__Payment">TODOS LOS MEDIOS DE PAGO</h3>
            </div>
        </div>
        </div>
    );
}

export default PreCheckout;
