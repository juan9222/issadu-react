import React from 'react'
import Whatsapp from '../../assets/Navbar/whatsapp.png'
import Facebook from '../../assets/Navbar/facebook.png'
import Instagram from '../../assets/Navbar/instagram.png'
import Pinterest from '../../assets/Navbar/pinterest.png'
import FooterLogo from '../../assets/Footer/footer-logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <div className="Footer">
            <Link to="/">
            <img className="Footer__Logo" alt="Footer Logo" src={FooterLogo} />
            </Link>
            <div className="Footer__Socials"> 
                <a href="https://web.whatsapp.com/send?l=es&phone=573044529259"><img className="Footer__Whatsapp" src={Whatsapp} alt="Whatsapp"  /></a>
                <a href="https://www.facebook.com/"><img className="Footer__Facebook" src={Facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com/"><img className="Footer__Instagram" src={Instagram} alt="Instagram" /></a>
                <a href="https://co.pinterest.com/"><img className="Footer__Pinterest" src={Pinterest} alt="Pinterest" /></a>
            </div>
            <div className="Footer__Service">
                <h3 className="Footer__Service-Title">SERVICIO AL CLIENTE: </h3>
                <a className="Footer__Links" href="https://web.whatsapp.com/send?l=es&phone=573044529259">&nbsp;CONTACTANOS&nbsp;|</a>
                <Link className="Footer__Links" to="/contact">&nbsp;&nbsp;SOBRE NOSOTRAS&nbsp;&nbsp;|&nbsp;</Link>
                {/* <Link className="Footer__Links" to="/contact">&nbsp;TARIFAS DE ENVÍO&nbsp;&nbsp;|&nbsp;</Link> */}
                <Link className="Footer__Links" to="/legal">&nbsp; ACUERDOS DE DEVOLUCIÓN</Link>
            </div>
            <div className="Footer__Account">
                {/* <h3 className="Footer__Service-Title">TU CUENTA:&nbsp;</h3> */}
                {/* <Link className="Footer__Links" to="/">&nbsp;ESTADO DE LA ORDEN&nbsp;&nbsp;|&nbsp;</Link>
                <Link className="Footer__Links" to="/">&nbsp;MI CLOSET&nbsp;&nbsp;|&nbsp;</Link> */}
                <Link className="Footer__Links" to="/fall">&nbsp;ENAMÓRATE DE ISSADÚ</Link>
            </div>
        </div>
    )
}


export default Footer