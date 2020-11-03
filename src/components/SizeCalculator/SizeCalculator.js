import React from 'react'
import Close from '../../assets/Navbar/close.png';
import "./SizeCalculator.css"
export default function SizeCalculator({setShowCloseSizeCalculator}) {
    return (
        <>
            <div className="SizeCalculator">
            <div className="SizeCalculator__Container">
                <div className="SizeCalculator___Title-Flex">
                    <h2 className="SizeCalculator___Title">Talla -Verifica tus Medidas Aquí-</h2>
                    <img className="SizeCalculator__Close" alt="Cerrar" src={Close} onClick={()=> setShowCloseSizeCalculator(false)} />
                </div>
                <h3 className="SizeCalculator__Description">Para que todo salga perfecto, toma un metro de costura y apunta las medidas en centimetros (cm):</h3>
                <div className="SizeCalculator__Measure">
                    <div className="SizeCalculator__Column">
                        <div className="SizeCalculator__Row">
                            <h3>Busto</h3>
                            <input className="SizeCalculator__Input" type="number" />
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>Cadera</h3>
                            <input className="SizeCalculator__Input" type="number" />
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>Cintura</h3>
                            <input className="SizeCalculator__Input" type="number" />
                        </div>
                    </div>
                    <div>
                        <div className="SizeCalculator__Row">
                            <h3>TOP</h3>
                            <h3>-</h3>
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>PANTY</h3>
                            <h3>-</h3>
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>ENTERIZO</h3>
                            <h3>-</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}
