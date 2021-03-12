import React from 'react'
import {Link} from 'react-router-dom'
import './BikiniTop.css'

const BikiniTop = ({topModel, setTopModel, sizeModel, setSizeModel,topColor, setTopColor, tops}) => {       
    return (
        <div className="BikiniTop">
               <h2 className="BikiniTop__Title">2.Modelo</h2>
               <h4 className="BikiniTop__Sub">Elige el modelo que más te enamore</h4>
               {/*Modelos de Tops*/}
               {          
                <div className="Bikini__Flex-Models">
                    {
                        tops.map((top) => ( 
                            top.tallas.map((options, index) => (
                                (options.talla === sizeModel) ?
                                    <img key={index} className={"Bikini__Models " + ((topModel === top.reference) ? 'Bikini__Models--Selected' : null)} src={`http://issadu.com/web/${top.url_icon}`} alt="Muestra" onClick={() => setTopModel(top.reference)} />
                                    :
                                    null
                            ))                       
                        ))
                    }
                </div>
               }
               <h2 className="BikiniTop__Title">3.Talla</h2>
               <h4 className="BikiniTop__Sub">Queremos que tu traje de baño sea como lo imaginaste, usa el botón "Verifica tus Medidas Aquí". <Link className="BikiniTop__SubLegal" to="/legal">Lee los términos de devolución aquí</Link>.</h4>
               <div className="Bikini__Flex-Size"> 
               {
                    tops.map( (top) => (  
                        (topModel === top.reference) ?
                            top.tallas.map((options,index) => {
                                if (options.talla !== "XXL") {
                                    return <div key={index} className={"BikiniTop__Size " + ((sizeModel === options.talla) ? 'BikiniTop__Size--Selected' : null)} onClick={() => setSizeModel(options.talla)}>{options.talla}</div>
                                } else {
                                    return null
                                }
                            })
                        :
                            null
                    ))
                }
               </div>
               {/*Colores*/}
               <h2 className="BikiniPanty__Title">4.Diseño</h2>
               <h2 className="Bikini__Titles">Colores sólidos</h2>
               <div className="Bikini__Flex"> 
               {
                    tops.map( (top) => (  
                        (topModel === top.reference) ?
                        top.color.planos.map((plano,index) => {
                           return <img key={index} className={"Bikini__Print " + ((topColor === plano.reference) ? 'Bikini__Print--Selected' : null)} src={`http://issadu.com/web/${plano.img_circular}`} alt="Muestra" onClick={() => setTopColor(plano.reference)} style={{"pointerEvents": "all"}} />
                        })
                        :
                        null
                    ))
                }
               </div>
               {/*Estampados*/}
               <h2 className="Bikini__Titles">Estampados</h2>
               <div className="Bikini__Flex"> 
               {
                tops.map( (top) => (  
                    (topModel === top.reference) ?
                    top.color.estampados.map((estampado,index) => {
                        return <img key={index} className={"Bikini__Print " + ((topColor === estampado.reference) ? 'Bikini__Print--Selected' : null)} src={`http://issadu.com/web/${estampado.img_circular}`} alt="Muestra" onClick={() => setTopColor(estampado.reference)} style={{"pointerEvents": "all"}} />
                    })
                    :
                    null
                ))
               }
               </div>
        </div>
    );
}

export default BikiniTop;
