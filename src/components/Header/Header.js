import React from 'react'
import Background from '../../assets/Header/background.png'
//import Models from '../../assets/Header/models.png'
import Logo from '../../assets/Header/Issadun-logo.svg'
import RightArrow from '../../assets/Header/right-arrow.png'
import {Link} from 'react-router-dom'
import ImgBikini from '../../assets/Header/build-bikini.png'
import ImgOnePiece from '../../assets/Header/build-onepiece.png'
import ImgHeader from '../../assets/Header/header.png'
// import Bikini1 from '../../assets/Header/Bikini-IS003.png'
// import Bikini2 from '../../assets/Header/Bikini-IS006.png'
// import Bikini3 from '../../assets/Header/Bikini-IS009.png'
// import OnePiece1 from '../../assets/Header/Entero-IP003.png'
// import OnePiece2 from '../../assets/Header/Entero-IS003.png'
// import OnePiece3 from '../../assets/Header/Entero-IS006.png'
import './Header.css'

const Header = props => {
    //const [ seconds , setSeconds] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setSeconds(seconds => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);
    return (
            <div className="Header">
            <img className="Header__Background" src={Background} alt="Mar sol arena Issadun vestidos de baño"/>
            {/* <img className="Header__Models" src={Models} alt="Modelos Enterizos y Bikinis" /> */}
            <img className="Header__Models" src={ImgHeader} alt="Modelos Enterizos y Bikinis" />
            {/* <img className="Header__Models" src={Models} alt="Modelos Enterizos y Bikinis" />
            <img className="Header__Models" src={Bikini3} alt="Modelos Enterizos y Bikinis" />
            <img className="Header__Models" src={OnePiece3} alt="Modelos Enterizos y Bikinis" /> */}
            {/* {seconds >= 0  && seconds <= 3 && 
            <>
            <img className="Header__Models" src={Bikini1} alt="Modelos Enterizos y Bikinis" />
            <img className="Header__Models" src={OnePiece1} alt="Modelos Enterizos y Bikinis" />
            </>
            }
            {seconds > 2  && seconds <= 5 && 
            <>
            <img className="Header__Models" src={Bikini2} alt="Modelos Enterizos y Bikinis" />
            <img className="Header__Models" src={OnePiece2} alt="Modelos Enterizos y Bikinis" />
            </>
            }
            {seconds > 4 &&  seconds < 6 &&
            <>
            <img className="Header__Models" src={Bikini3} alt="Modelos Enterizos y Bikinis" />
            <img className="Header__Models" src={OnePiece3} alt="Modelos Enterizos y Bikinis" />
            </>
            } */}
            {/* {seconds === 6 &&
                setSeconds(0)
            } */}
            <img className="Header__Main-Logo" src={Logo} alt="Logo ISSADUN" />
            <Link to={{
                pathname: "/customizer",
                search: "?bikiniOrOnePiece=Bikini" 
            }}>
            <div className="Header__Button-Bikini">
                ARMA TU BIKINI AQUÍ
                <div className="Header__Button-White">
                    <img className="Header__Button-Right" src={RightArrow} alt="flecha derecha" />
                </div>  
            </div>
            </ Link>
            <Link to={{
                pathname: "/customizer",
                search:  `?bikiniOrOnePiece=${encodeURIComponent("One Piece")}`
            }}>
            <div className="Header__Button-OnePiece">
            <div className="Header__Button-White">
                    <img className="Header__Button-Left" src={RightArrow} alt="flecha derecha" />
                </div>  
                ARMA TU ENTERIZO AQUÍ 
            </div>
            </ Link>
            <h1 className="Header__Title"> <span className="Header__Customize">ARMA</span> <br />TU VESTIDO <br /> DE BAÑO</h1>
            <h2 className="Header__Subtitle">Recíbelo en tu casa <br />
            <span className="Header__Easy">Fácil • Rápido • Seguro</span> <br />
            Envíos a toda Colombia</h2>

            <img className="Header__Bikini" src={ImgBikini} alt="Bikini Imagen" />
            <img className="Header__One" src={ImgOnePiece} alt="Imagen Enterizo " />
            </div>
    )
}


export default Header