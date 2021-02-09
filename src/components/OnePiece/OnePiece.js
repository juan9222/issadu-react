import React, {useEffect, useState, useRef, useContext, useCallback} from 'react'
import APIService from '../../services/APIService.js'
import {OnePieceContext} from '../../context/OnePieceContext.js'
import './OnePiece.css'

const OnePiece = ({cloth1ref="Carmen",cloth1color="IP020"}) => {
    const [onePieces, setOnePieces] = useState([])
    const [onePieceProductId, setOnePieceProductId] = useState(0)
    const [onePieceModel, setOnePieceModel] = useState(cloth1ref)
    const [onePieceColor, setOnePieceColor] = useState(cloth1color)
    const [sizeModel, setSizeModel] = useState("S")
    const [onePiecePrice, setOnePiecePrice] = useState(0)
    const [onePieceDiscountedPrice, setOnePieceDiscountedPrice] = useState(0)
    const {storeOnePieceObject} = useContext(OnePieceContext);
    const isInitialMount = useRef(true);
    async function getOnePieces() {
        let response = await APIService.getCloth("Una Pieza");
        setOnePieces(response)
    }
    const getPrices = useCallback(async () => {
        onePieces.map( (onePiece) => (
            (onePieceModel === onePiece.reference) ?
            onePiece.tallas.map((options) => (
                (sizeModel === options.talla) ?
                (setOnePiecePrice(options.precio),
                setOnePieceProductId(onePiece.id),
                setOnePieceDiscountedPrice(Math.floor(options.precio*(1-(1*0.01*options.descuento)))))
                :
                null
            ))
            :
            null
        ))
      }, [onePieceModel,onePieces,sizeModel])
    const buildOnePieceObject =  useCallback(() => {
        let onePiece = {
            type: "Enterizo",
            productId: onePieceProductId,
            model: onePieceModel,
            size: sizeModel,
            color: onePieceColor,
            price: onePiecePrice,
            priceDiscount: onePieceDiscountedPrice,
            id: null,
            quantity: 0
        }
        storeOnePieceObject(onePiece)
      },[onePieceProductId,onePieceColor,onePieceDiscountedPrice,onePieceModel,onePiecePrice,sizeModel,storeOnePieceObject])
    useEffect(() => {
        if (isInitialMount.current) {
            getOnePieces();
            isInitialMount.current = false;
         } else {
            getPrices();
            buildOnePieceObject();
            return () => {
            }
         }
    }, [onePieceModel,sizeModel,onePieceColor, getPrices,buildOnePieceObject])

    return (
        <div className="OnePiece">
            {
            onePieces.map((onePiece) => ( 
                (onePieceModel === onePiece.reference) ?
                onePiece.tallas.map((options,index) => (
                        (sizeModel === options.talla) ?
                        <img  key={index} className="OnePiece-Main" alt="Top Main OnePiece" src={`http://issadu.com/web/${options.fotos}`}/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            {
            onePieces.map((onePiece) => (  
                    (onePieceModel === onePiece.reference) ?
                    onePiece.color.planos.map((plano, index) =>(
                            (onePieceColor === plano.reference) ?
                            <img key={index} className="OnePiece__Color" src={`http://issadu.com/web/${plano.img_cuadrada}`} alt="Main Color"/>
                            :
                            null
                        ))
                    :
                        null
                ))
            }
            {
            onePieces.map((onePiece) => (  
                    (onePieceModel === onePiece.reference) ?
                    onePiece.color.estampados.map((estampado, index) =>(
                            (onePieceColor === estampado.reference) ?
                            <img key={index} className="OnePiece__Color" src={`http://issadu.com/web/${estampado.img_cuadrada}`} alt="Main Color"/>
                            :
                            null
                        ))
                    :
                        null
                ))
            }
            <div className="OnePiece__Customizer">
            <h2 className="Bikini__Title">ARMA TU ENTERIZO COMO QUIERAS</h2>
            <h2 className="OnePiece__Step1-Title">1.Prenda</h2>
                <h4 className="OnePiece__Step1-Sub">Selecciona la prenda que vas a diseñar</h4>
                <div className={"OnePiece__OnePiece"}>ENTERIZO</div>
                <h2 className="OnePiece__Step1-Title">2.Modelo</h2>
                <h4 className="OnePiece__Step1-Sub">Elige el modelo que más te enamore</h4>
                {/*Pantys*/}
                {
                <div className="OnePiece__Flex-Models"> 
                {
                onePieces.map((onePiece) => ( 
                    onePiece.tallas.map((options, index) => (
                        (options.talla === sizeModel) ?
                            <img key={index} className={"OnePiece__Models " + ((onePieceModel === onePiece.reference) ? 'OnePiece__Models--Selected' : null)} src={`http://issadu.com/web/${onePiece.url_icon}`} alt="Muestra" onClick={() =>{setOnePieceModel(onePiece.reference)}} />
                            :
                            null
                    ))                       
                ))
                
                }
                </div>
                }
                <h2 className="OnePiece__Step1-Title">3.Talla</h2>
                <h4 className="OnePiece__Step1-Sub">Queremos que tu traje de baño sea como lo imaginaste, usa el botón "Verifica tus Medidas Aquí", lee los términos de devolución aquí.</h4>
                <div className="OnePiece__Flex-Size"> 
                {
                onePieces.map( (onePiece) => (  
                        (onePieceModel === onePiece.reference) ?
                        onePiece.tallas.map((options,index) => {
                                return <div key={index} className={"OnePiece__Size " + ((sizeModel === options.talla) ? 'OnePiece__Size--Selected' : null)} onClick={() => (setSizeModel(options.talla))}>{options.talla}</div>
                            })
                        :
                            null
                    ))
                }
                </div>
                <h2 className="BikiniPanty__Title">4.Diseño</h2>
                <h2 className="Bikini__Titles">Colores sólidos</h2>
                {/*Colores*/}
                <div className="OnePiece__Flex"> 
                {
                onePieces.map( (onePiece) => (  
                        (onePieceModel === onePiece.reference) ?
                        onePiece.color.planos.map((plano,index) => {
                            return <img key={index} className={"OnePiece__Print " + ((onePieceColor === plano.reference) ? 'OnePiece__Print--Selected' : null)}  src={`http://issadu.com/web/${plano.img_circular}`} alt="Muestra" onClick={() => setOnePieceColor(plano.reference)} style={{"pointerEvents": "all"}} />
                        })
                        :
                        null
                    ))
                }
                </div>
                {/*Estampados*/}
                <h2 className="OnePiece__Titles">Estampados</h2>
                <div className="OnePiece__Flex"> 
                {
                onePieces.map( (onePiece) => (  
                    (onePieceModel === onePiece.reference) ?
                    onePiece.color.estampados.map((estampado,index) => {
                        return <img key={index} className={"OnePiece__Print " + ((onePieceColor === estampado.reference) ? 'OnePiece__Print--Selected' : null)} src={`http://issadu.com/web/${estampado.img_circular}`} alt="Muestra" onClick={() => setOnePieceColor(estampado.reference)} style={{"pointerEvents": "all"}} />
                    })
                    :
                    null
                ))
                }
                </div>
            </div>
        </div>
    );
}

export default OnePiece;
