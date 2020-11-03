import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getRoute} from '../../actions/getRoute.js'
import {Link, useLocation} from 'react-router-dom';
import Hamburger from '../../assets/Navbar/hamburguer.svg';
import LogoMenu from '../../assets/Navbar/Issadun-logo-white.png';
import Close from '../../assets/Navbar/close.png';
import Whatsapp from '../../assets/Navbar/whatsapp.png';
import Facebook from '../../assets/Navbar/facebook.png';
import Instagram from '../../assets/Navbar/instagram.png';
import Pinterest from '../../assets/Navbar/pinterest.png';
import './Navbar.css';

const Navbar = props => {
    const dispatch = useDispatch();
    const [showCloseNavbar, setShowCloseNavbar] = useState(false);
    const route = useLocation().pathname
    dispatch(getRoute(route))
    return (
        <div>
            <img className="Navbar__Logo" alt="Abrir Menú" src={Hamburger} onClick={()=> setShowCloseNavbar(true)}  />
            {showCloseNavbar && 
                        <div className={`Navbar__Background ${showCloseNavbar ? "Navbar__Background--Open" : ""}`}>
                        <div className="Navbar__Flex-Right"> 
                            <img className="Navbar__Close" alt="Cerrar" onClick={()=> setShowCloseNavbar(false)} src={Close} />
                        </div>
                        <Link to="/"> 
                            <img className="Navbar__LogoMenu" alt="Issadu" src={LogoMenu} /> 
                        </ Link>
                        
                        <div className="Navbar__Column"> 
                            {/* <Link className="Navbar__Text" to="/"> REGÍSTRATE </ Link>
                            <Link className="Navbar__Text" to="/"> MI CLOSET </ Link> */}
                            <hr className="Navbar__HR" />
                            <Link className="Navbar__Text" to="/contact"> NOSOTRAS </ Link>
                            <Link className="Navbar__Text" to={{pathname: "/customizer",state: { bikiniOrOnePiece: "Bikini" }}}> ARMA TU BIKINI </ Link>
                            <Link className="Navbar__Text" to={{pathname: "/customizer",state: { bikiniOrOnePiece: "One Piece" }}}> ARMA TU ENTERIZO </ Link>
                            <Link className="Navbar__Text" to="/best-sellers"> LO MAS VENDIDO </ Link>
                            <hr className="Navbar__HR" />
                            <div className="Navbar__Flex-Socials"> 
                                <a href="https://web.whatsapp.com/"><img className="Navbar__Whatsapp" src={Whatsapp} alt="Whatsapp"  /></a>
                                <a href="https://www.facebook.com/"><img className="Navbar__Facebook" src={Facebook} alt="Facebook" /></a>
                                <a href="https://www.instagram.com/"><img className="Navbar__Instagram" src={Instagram} alt="Instagram" /></a>
                                <a href="https://co.pinterest.com/"><img className="Navbar__Pinterest" src={Pinterest} alt="Pinterest" /></a>
                            </div>
                        </div>
                    </div>
            }


        </div> 
    )
}


export default Navbar