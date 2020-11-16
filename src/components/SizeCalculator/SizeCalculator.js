import React, {useState} from 'react'
import Close from '../../assets/Navbar/close.png';
import "./SizeCalculator.css"
export default function SizeCalculator({setShowCloseSizeCalculator}) {
    const [sizes, setSizes] = useState({
        bust: "",
        hip: "",
        waist: ""
    })

    const handleInputChange = (event) => {
        setSizes({
            ...sizes,
            [event.target.name] : event.target.value
        })
    }

    const calculateTopSize = () => {
        if (sizes.bust >= 86 && sizes.bust <= 91) {
            return "S"
        } else if (sizes.bust >= 92 && sizes.bust <= 97) {
            return "M"
        } else if (sizes.bust >= 98 && sizes.bust <= 103) {
            return "L"
        } else if (sizes.bust >= 104 && sizes.bust <= 110) {
            return "XL"
        } else if (sizes.bust >= 111 && sizes.bust <= 116) {
            return "XXL"
        } else {
            return "-"
        }
       
    }

    const calculatePantySize = () => {
        if ((sizes.hip >= 66 && sizes.hip <= 71) && (sizes.waist >= 96 && sizes.waist <= 99)) {
            return "S"
        } else if ((sizes.hip >= 72 && sizes.hip <= 77) && (sizes.waist >= 100 && sizes.waist <= 103)) {
            return "M"
        } else if ((sizes.hip >= 78 && sizes.hip <= 83) && (sizes.waist >= 104 && sizes.waist <= 107)) {
            return "L"
        } else if ((sizes.hip >= 84 && sizes.hip <= 88) && (sizes.waist >= 108 && sizes.waist <= 111)) {
            return "XL"
        } else if ((sizes.hip >= 89 && sizes.hip <= 94) && (sizes.waist >= 112 && sizes.waist <= 117)) {
            return "XXL"
        } else {
            return "-"
        }
       
    }

    const calculateOnePieceSize = () => {
        if ((sizes.bust >= 86 && sizes.bust <= 91) && (sizes.hip >= 66 && sizes.hip <= 71) && (sizes.waist >= 96 && sizes.waist <= 99)) {
            return "S"
        } else if ((sizes.bust >= 92 && sizes.bust <= 97) && (sizes.hip >= 72 && sizes.hip <= 77) && (sizes.waist >= 100 && sizes.waist <= 103)) {
            return "M"
        } else if ((sizes.bust >= 98 && sizes.bust <= 103) && (sizes.hip >= 78 && sizes.hip <= 83) && (sizes.waist >= 104 && sizes.waist <= 107)) {
            return "L"
        } else if ((sizes.bust >= 104 && sizes.bust <= 110) && (sizes.hip >= 84 && sizes.hip <= 88) && (sizes.waist >= 108 && sizes.waist <= 111)) {
            return "XL"
        } else if ((sizes.bust >= 111 && sizes.bust <= 116) && (sizes.hip >= 84 && sizes.hip <= 88) && (sizes.waist >= 112 && sizes.waist <= 117)) {
            return "XXL"
        } else {
            return "-"
        }
       
    }

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
                            <input name="bust" onChange={handleInputChange} className="SizeCalculator__Input" type="number" />
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>Cadera</h3>
                            <input name="hip" onChange={handleInputChange} className="SizeCalculator__Input" type="number" />
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>Cintura</h3>
                            <input name="waist" onChange={handleInputChange} className="SizeCalculator__Input" type="number" />
                        </div>
                    </div>
                    <div>
                        <div className="SizeCalculator__Row">
                            <h3>TOP</h3>
                            <h3>{calculateTopSize()}</h3>
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>PANTY</h3>
                            <h3>{calculatePantySize()}</h3>
                        </div>
                        <div className="SizeCalculator__Row">
                            <h3>ENTERIZO</h3>
                            <h3>{calculateOnePieceSize()}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}
