import React from 'react';
import './BikiniPanty.css'

const BikiniPanty = ({pantyModel, setPantyModel, sizeModel, setSizeModel, setPantyColor, pantys}) => {
    return (
        <div className="BikiniPanty">
               <h2 className="BikiniPanty__Title">2.Modelo</h2>
               <h4 className="BikiniPanty__Sub">Elige el modelo que más te enamore</h4>
               {/*Modelos de Pantys*/}
               <div className="Bikini__Flex-Models"> 
                {
                pantys.map((panty) => ( 
                    panty.tallas.map((options, index) => (
                        (options.talla === sizeModel) ?
                            <img key={index} className={"Bikini__Models " + ((pantyModel === panty.reference) ? 'Bikini__Models--Selected' : null)} src={`http://issadu.com/web/${panty.url_icon}`} alt="Muestra" onClick={() => setPantyModel(panty.reference)} />
                            :
                            null
                    ))                       
                ))
                }
               </div>
               <h2 className="BikiniPanty__Title">3.Talla</h2>
               <h4 className="BikiniPanty__Sub">Queremos que tu traje de baño sea como lo imaginaste, usa el botón "Verifica tus Medidas Aquí", lee los términos de devolución aquí.</h4>
               <div className="Bikini__Flex-Size"> 
               {
                    pantys.map( (panty) => (  
                        (pantyModel === panty.reference) ?
                            panty.tallas.map((options,index) => {
                                return <div key={index} className="BikiniTop__Size" onClick={() => setSizeModel(options.talla)}>{options.talla}</div>
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
                    pantys.map( (panty) => (  
                        (pantyModel === panty.reference) ?
                        panty.color.planos.map((plano,index) => {
                           return <img key={index} className="OnePiece__Print" src={`http://issadu.com/web/${plano.img_circular}`} alt="Muestra" onClick={() => setPantyColor(plano.reference)} style={{"pointerEvents": "all"}} />
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
                pantys.map( (panty) => (  
                    (pantyModel === panty.reference) ?
                    panty.color.estampados.map((estampado,index) => {
                        return <img key={index} className="OnePiece__Print" src={`http://issadu.com/web/${estampado.img_circular}`} alt="Muestra" onClick={() => setPantyColor(estampado.reference)} style={{"pointerEvents": "all"}} />
                    })
                    :
                    null
                ))
               }
               </div>
        </div>
    );
}

export default BikiniPanty;
