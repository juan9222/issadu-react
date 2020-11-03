//import React, {useState} from 'react'
import React, {useState,useEffect} from 'react'
import APIService from '../../services/APIService.js'
import './Bikini.css'

// Components
import BikiniTop from '../BikiniTop/BikiniTop.js'
import BikiniPanty from '../BikiniPanty/BikiniPanty.js'


function Bikini() {
    useEffect(() => {
        getTops();
        getPantys();
    }, [])
    async function getTops() {
        let response = await APIService.getCloth("Top");
        setTops(response)
    }
    async function getPantys() {
        let response = await APIService.getCloth("Panty");
        setPantys(response)
    }
    const [piece, setPiece] = useState("Top")
    const [tops, setTops] = useState([]) 
    const [pantys, setPantys] = useState([]) 
    const [topColor, setTopColor] = useState("IP020")
    const [sizeModel, setSizeModel] = useState("S")
    const [topModel, setTopModel] = useState("Daniela")
    const [pantyModel, setPantyModel] = useState("Carolina")
    const [pantyColor, setPantyColor] = useState("IP020")
    const [topPrice, setTopPrice] = useState(0)
    const [pantyPrice, setPantyPrice] = useState(0)
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
            
                {/* <img className="Bikini__Color-Top" src={topColor} alt="Top Color"/>
                <img className="Bikini__Color-Bottom" src={pantyColor} alt="Panty Color"/> */}
                {/* <div className={`Bikini__Color-Top Bikini__Color-Top--${topColor}`}></div>
                <div className={`Bikini__Color-Bottom Bikini__Color-Top--${pantyColor}`}></div> */}
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
               {piece === "Top" && <BikiniTop tops={tops} topModel={topModel} setTopModel={setTopModel} setTopColor={setTopColor} sizeModel={sizeModel} setSizeModel={setSizeModel} topPrice={topPrice} setTopPrice={setTopPrice} />}
               {piece === "Panty" && <BikiniPanty  pantys={pantys} pantyModel={pantyModel} setPantyModel={setPantyModel} setPantyColor={setPantyColor} sizeModel={sizeModel} setSizeModel={setSizeModel} pantyPrice={pantyPrice} setPantyPrice={setPantyPrice}/>}
           </div>
            
            {/* {
            pantys.map(panty => (  
                panty.tallas.map((options) => (
                    (options.talla === sizeModel && pantyModel === panty.reference) ?
                    setPantyPrice(options.precio)
                    :
                    null
                ))
            ))
            } */}
        </div>
    )
}

export default Bikini
