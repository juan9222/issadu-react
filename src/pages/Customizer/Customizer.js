import React, {useState} from 'react';
import Bikini from '../../components/Bikini/Bikini.js'
import OnePiece from '../../components/OnePiece/OnePiece.js'
import Sarong from '../../components/Sarong/Sarong.js'
import Float from '../../assets/Customizer/Flotador-min.png'
import Palm from '../../assets/Customizer/Palma-esquina-min.png'
import PreCheckout from '../../components/PreCheckout/PreCheckout.js'
import Star from '../../assets/Customizer/Estrella-min.png'
import Coconut from '../../assets/Customizer/Coco-min.png'
import Snail from '../../assets/Customizer/32.jpg'
import SizeCalculator from "../../components/SizeCalculator/SizeCalculator.js"
// import Hook from '../../assets/Swimsuits/hook.svg'
// import Question from '../../assets/Swimsuits/questions.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './Customizer.css'

const Customizer = (props) => {
    const bikiniOrOnePiece = props.location.state.bikiniOrOnePiece;
    const [mode, setMode] = useState(bikiniOrOnePiece);
    const [showCloseSizeCalculator, setShowCloseSizeCalculator] = useState(false);
    return (
        <div className="Customizer">
            <img className="Customizer__Snail" src={Snail} alt="Snail"/>
            <img className="Customizer__Coconut" src={Coconut} alt="Coconut"/>
            <img className="Customizer__Float" src={Float} alt="Float"/>
            <img className="Customizer__Palm" src={Palm} alt="Palm"/>
            <div className="Customizer__Verify-Sizes" onClick={()=> setShowCloseSizeCalculator(true)}>
                <h3 className="Customizer__Verify-Label">VERIFICA TUS MEDIDAS AQUÍ</h3>
                <img className="Customizer__Star" src={Star} alt="Starfish"  />
            </div>
            {showCloseSizeCalculator && <SizeCalculator setShowCloseSizeCalculator={setShowCloseSizeCalculator}/>}
            <div className="Customizer__Closet">
                <div> 
                    {(mode === "Bikini") ? <>
                        <div className="Customizer__One" onClick={() => setMode("One Piece")}>CAMBIA A ENTERIZO</div>
                        {/* <div className="Customizer__BathRobe" onClick={() => setMode("Sarong")}>SALIDAS DE BAÑO</div> */}
                    </> : 
                    null
                    }
                    {(mode === "One Piece") ? <>
                    <div className="Customizer__One" onClick={() => setMode("Bikini")}>CAMBIA A BIKINI</div>
                    {/* <div className="Customizer__BathRobe" onClick={() => setMode("Sarong")}>SALIDAS DE BAÑO</div> */}
                    </> : null}
                    {(mode === "Sarong") ? <>
                    <div className="Customizer__One" onClick={() => setMode("Bikini")}>CAMBIA A BIKINI</div>
                    <div className="Customizer__BathRobe" onClick={() => setMode("One Piece")}>CAMBIA A ENTERIZO</div>
                    </> : 
                    null}
                </div>
                {/* <div> 
                    <div className="Customizer__Save"><FontAwesomeIcon icon={faHeart} /> &nbsp; Guardar en mi Closet</div>
                    <div className="Customizer__Design"><img className="Customizer__Hook" src={Hook} alt="Gancho" /> &nbsp; Crear un nuevo diseño</div>
                    <div className="Customizer__Contact"><img className="Customizer__Question" src={Question} alt="Escríbenos" /> &nbsp; ¿Tienes dudas? Escríbenos</div>
                </div> */}
            </div>
            {mode === "Bikini" && <Bikini/>}
            {mode === "One Piece" && <OnePiece/>}
            {mode === "Sarong" && <Sarong/>}
            <PreCheckout/>
            <div className="Customizer__Advice">
            <h2>Recuerda</h2>
            <h3 className="Customizer__Advice-Text">Puedes comprar una prenda o el conjunto completo</h3>
            </div>
        </div>

    );
}

export default Customizer;
