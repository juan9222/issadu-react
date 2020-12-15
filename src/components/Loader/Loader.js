import React, {useEffect} from 'react';
import './Loader.css';
import IssaduLogo from '../../assets/Header/Issadun-logo.svg'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Loader = () => {
    useEffect(() => {
        let issaduBody = document.querySelector('body');
        disableBodyScroll(issaduBody);
        return () => {
            enableBodyScroll(issaduBody)
          }
    }, [])
    return (
        <div className="Loader">
            <img className="Loader__Logo"src={IssaduLogo} alt="Logo de Issadu"/>
            <h2 className="Loader__Loading">Cargando</h2>
        </div>
    );
}

export default Loader;
