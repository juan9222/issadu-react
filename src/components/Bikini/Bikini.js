//import React, {useState} from 'react'
import React, {useState,useEffect, useRef, useCallback, useContext} from 'react'
import APIService from '../../services/APIService.js'
import {TopContext} from '../../context/TopContext.js'
import {PantyContext} from '../../context/PantyContext.js'

import './Bikini.css'

// Components
import BikiniTop from '../BikiniTop/BikiniTop.js'
import BikiniPanty from '../BikiniPanty/BikiniPanty.js'

const Bikini = ({piece,setPiece}) => {
    const [tops, setTops] = useState([]) 
    const [pantys, setPantys] = useState([]) 
    const [topColor, setTopColor] = useState("IP020")
    const [sizeModel, setSizeModel] = useState("S")
    const [topModel, setTopModel] = useState("Daniela")
    const [pantyModel, setPantyModel] = useState("Carolina")
    const [pantyColor, setPantyColor] = useState("IP020")
    const [topPrice, setTopPrice] = useState(0)
    const [topPriceDiscount, setTopPriceDiscount] = useState(0)
    const [pantyPrice, setPantyPrice] = useState(0)
    const [pantyPriceDiscount, setPantyPriceDiscount] = useState(0)
    const {storeTopObject} = useContext(TopContext);
    const {storePantyObject} = useContext(PantyContext);
    const isInitialMount = useRef(true);

    async function getTops() {
        let response = await APIService.getCloth("Top");
        setTops(response)
    }
    async function getPantys() {
        let response = await APIService.getCloth("Panty");
        setPantys(response)
    }
    const getPrices = useCallback(async () =>{
        pantys.map( (panty) => (  
            (pantyModel === panty.reference) ?
                panty.tallas.map((options) => (
                    (options.talla === sizeModel) ?
                        (setPantyPrice(options.precio),
                        setPantyPriceDiscount(Math.floor(options.precio*(1-(1*0.01*options.descuento)))))
                    :
                    null
                ))
            :
                null
        ))       
        tops.map( (top) => (  
            (topModel === top.reference) ?
                top.tallas.map((options) => (
                    (options.talla === sizeModel) ?
                        (setTopPrice(options.precio),
                        setTopPriceDiscount(Math.floor(options.precio*(1-(1*0.01*options.descuento)))))
                    :
                    null
                ))
            :
                null
        ))
    },[pantyModel,pantys,sizeModel,topModel,tops])
    const buildTopObject = useCallback(()=>{
        let top = {
            type: "Top",
            model: topModel,
            size: sizeModel,
            color: topColor,
            price: topPrice,
            priceDiscount: topPriceDiscount,
            id: null,
            quantity: 0
        }
        storeTopObject(top)
    },[sizeModel,topColor,topModel,topPrice,topPriceDiscount,storeTopObject])
    const buildPantyObject = useCallback(()=>{
        let panty = {
            type: "Panty",
            model: pantyModel,
            size: sizeModel,
            color: pantyColor,
            price: pantyPrice,
            priceDiscount: pantyPriceDiscount,
            id: null,
            quantity: 0
        }
        storePantyObject(panty)
    },[pantyColor,pantyModel,pantyPrice,pantyPriceDiscount,sizeModel,storePantyObject])
    useEffect(() => {
        if (isInitialMount.current) {
            getTops();
            getPantys();
            isInitialMount.current = false;
         } else {
            getPrices()
            buildTopObject()
            buildPantyObject()
            return () => {
            }
         }

    },[topModel,pantyModel,sizeModel,topColor,pantyColor,getPrices, buildTopObject,buildPantyObject])

    return (
        <div className="Bikini">
            <div className="Bikini__Girl">
            {
            tops.map((top) => (  
                (topModel === top.reference) ?
                    top.tallas.map((options,index) => (
                        (sizeModel === options.talla) ?
                        <img  key={index} className="Bikini-Main__Top" alt="Top Main Bikini" src={`http://issadu.com/web/${options.fotos}`}/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            {
            pantys.map((panty) => (  
                (pantyModel === panty.reference) ?
                    panty.tallas.map((options,index) => (
                        (sizeModel === options.talla) ?
                        <img  key={index} className="Bikini-Main__Bottom" alt="Bottom Main Bikini"  src={`http://issadu.com/web/${options.fotos}`}/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            </div>
           <div className="Bikini__Color">
           {
            tops.map((top) => (  
                (topModel === top.reference) ?
                    top.color.planos.map((plano, index) =>(
                        (topColor === plano.reference) ?
                        <img key={index} className="Bikini__Color-Top" src={`http://issadu.com/web/${plano.img_rectangular}`} alt="Top Color"/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            {
            tops.map((top) => (  
                (topModel === top.reference) ?
                    top.color.estampados.map((estampado, index) =>(
                        (topColor === estampado.reference) ?
                        <img key={index} className="Bikini__Color-Top" src={`http://issadu.com/web/${estampado.img_rectangular}`} alt="Top Color"/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            {
            pantys.map((panty) => (  
                (pantyModel === panty.reference) ?
                    panty.color.planos.map((plano, index) =>(
                        (pantyColor === plano.reference) ?
                        <img key={index} className="Bikini__Color-Top" src={`http://issadu.com/web/${plano.img_rectangular}`} alt="Top Color"/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
            {
            pantys.map((panty) => (  
                (pantyModel === panty.reference) ?
                    panty.color.estampados.map((estampado, index) =>(
                        (pantyColor === estampado.reference) ?
                        <img key={index} className="Bikini__Color-Bottom" src={`http://issadu.com/web/${estampado.img_rectangular}`} alt="Top Color"/>
                        :
                        null
                    ))
                :
                    null
            ))
            }
           </div>
           <div className="Bikini__Customizer">
               <h2 className="Bikini__Title">ARMA TU BIKINI COMO QUIERAS</h2>
               <h2 className="Bikini__Top-Step1-Title">1.Prenda</h2>
               <h4 className="Bikini__Top-Step1-Sub">Selecciona la prenda que vas a diseñar</h4>
               {/*Selector*/}
               <div className="Bikini__Flex-Selector">
                <div className={"Bikini__Top " + ((piece === "Top") ? 'Bikini__Top--Selected' : null)} onClick={() => setPiece("Top")}>TOP</div>
                <div className="Bikini__Pipe">|</div>
                <div className={"Bikini__Panty " + ((piece === "Panty") ? 'Bikini__Top--Selected' : null)}  onClick={() => setPiece("Panty")}>PANTY</div>
               </div>
               {piece === "Top" && <BikiniTop tops={tops} topModel={topModel} setTopModel={setTopModel} setTopColor={setTopColor} sizeModel={sizeModel} setSizeModel={setSizeModel} />}
               {piece === "Panty" && <BikiniPanty  pantys={pantys} pantyModel={pantyModel} setPantyModel={setPantyModel} setPantyColor={setPantyColor} sizeModel={sizeModel} setSizeModel={setSizeModel}/>}
           </div>
        </div>
    )
}

export default Bikini
