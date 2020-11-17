import React, {useState, useEffect} from 'react';
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
import OnePieceProvider from "../../context/OnePieceContext.js"
import TopProvider from "../../context/TopContext.js"
import PantyProvider from "../../context/PantyContext.js"
import Hook from '../../assets/Swimsuits/hook.svg'
import Question from '../../assets/Swimsuits/questions.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './Customizer.css'

const Customizer = (props) => {
    const bikiniOrOnePiece = props.location.state.bikiniOrOnePiece;
    const cloth1type = props.location.state.cloth1type;
    const cloth1ref = props.location.state.cloth1ref;
    const cloth1color = props.location.state.cloth1color;
    const cloth2type = props.location.state.cloth2type;
    const cloth2ref = props.location.state.cloth2ref;
    const cloth2color = props.location.state.cloth2color;
    const [mode, setMode] = useState(bikiniOrOnePiece);
    const [piece, setPiece] = useState("Top")
    const [showCloseSizeCalculator, setShowCloseSizeCalculator] = useState(false);

    useEffect(() => {
        if (bikiniOrOnePiece === "Una Pieza") {
            setMode("One Piece")
        }
        if (bikiniOrOnePiece === "Top" || bikiniOrOnePiece === "Panty" ) {
            setMode("Bikini")
            setPiece("Top")
        }
        // eslint-disable-next-line 
    }, [])
    return (   
        <div className="Customizer">
            <OnePieceProvider>
            <TopProvider>
            <PantyProvider>
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
                <br/>
                <div> 
                    {/* <div className="Customizer__Save"><FontAwesomeIcon icon={faHeart} /> &nbsp; Guardar en mi Closet</div> */}
                    <div className="Customizer__Design"><img className="Customizer__Hook" src={Hook} alt="Gancho" /> &nbsp; Crear un nuevo diseño</div>
                    <a href="https://web.whatsapp.com/send?l=es&phone=573044529259" className="Customizer__Contact"><img className="Customizer__Question" src={Question} alt="Escríbenos" /> &nbsp; ¿Tienes dudas? Escríbenos</a>
                </div>
            </div>
            {mode === "Bikini" && <Bikini  cloth1type={cloth1type} cloth1ref={cloth1ref} cloth1color={cloth1color} cloth2type={cloth2type} cloth2ref={cloth2ref} cloth2color={cloth2color} piece={piece} setPiece={setPiece}/>}
            {mode === "One Piece" && <OnePiece  cloth1type={cloth1type} cloth1ref={cloth1ref} cloth1color={cloth1color}/>}
            {mode === "Sarong" && <Sarong cloth1type={cloth1type} cloth1ref={cloth1ref} cloth1color={cloth1color}/>}
            <div className="Customizer__Advice">
            <h2>Recuerda</h2>
            <h3 className="Customizer__Advice-Text">Puedes comprar una prenda o el conjunto completo</h3>
            </div>
            <PreCheckout mode={mode} piece={piece}/>
            </PantyProvider>
            </TopProvider>
            </OnePieceProvider>
        </div>
    );
}

export default Customizer;
