import React from 'react'
import FinalSelection from '../../components/FinalSelection/FinalSelection.js'
import IssaduLogo from '../../assets/Header/Issadun-logo.png'
import '../Checkout/Checkout.css'

export default function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout__Separator">
                <img className="Checkout__Logo" alt="Issadu Logo" src={IssaduLogo}></img>
                <h3 className="Checkout__Label Checkout__Label-Contact">Información de Contacto</h3>
                <input type="text" className="Checkout__Input Checkout__Mail" placeholder="Correo Electrónico"/>
                <h3 className="Checkout__Label Checkout__Label-Contact">Dirección de envío</h3>
                <div className="Checkout__Flex">
                    <input className="Checkout__Input Checkout__Name" placeholder="Nombre" />
                    <input className="Checkout__Input"placeholder="Apellido" />
                </div>
                <input className="Checkout__Input Checkout__CC" placeholder="Cedula" />
                <input className="Checkout__Input Checkout__CC" placeholder="Dirección" />
                <input className="Checkout__Input Checkout__CC" placeholder="Apartamento, local, etc." />
                <input className="Checkout__Input Checkout__CC" placeholder="Ciudad" />
                <div className="Checkout__Flex">
                    <select className="Checkout__Input Checkout_Location" name="countries" id="countries">
                        <option defaultValue="" disabled>País</option>
                        <option value="Colombia">Colombia</option>
                    </select>
                    <select className="Checkout__Input Checkout_Location" name="countries" id="countries">
                        <option defaultValue="" disabled>Departamento</option>
                        <option value="CALI">Cali</option>
                        <option value="VAC">Valle del Cauca</option>
                        <option value="BOG">Bogotá</option>
                        <option value="AMA">Amazonas</option>
                        <option value="ANT">Antioquia</option>
                        <option value="ARA">Arauca</option>
                        <option value="ATL">Atlántico</option>
                        <option value="BOL">Bolívar</option>
                        <option value="BOY">Boyacá</option>
                        <option value="CAL">Caldas</option>
                        <option value="CAQ">Caquetá</option>
                        <option value="CAS">Casanare</option>
                        <option value="CAU">Cauca</option>
                        <option value="CES">César</option>
                        <option value="CHO">Chocó</option>
                        <option value="COR">Córdoba</option>
                        <option value="CUN">Cundinamarca</option>
                        <option value="GUA">Guainía</option>
                        <option value="GUV">Guaviare</option>
                        <option value="HUI">Huila</option>
                        <option value="LAG">La Guajira</option>
                        <option value="MAG">Magdalena</option>
                        <option value="MET">Meta</option>
                        <option value="NAR">Nariño</option>
                        <option value="NSA">Norte de Santander</option>
                        <option value="PUT">Putumayo</option>
                        <option value="QUI">Quindío</option>
                        <option value="RIS">Risaralda</option>
                        <option value="SAP">San Andrés, Providencia y Santa Catalina</option>
                        <option value="SAN">Santander</option>
                        <option value="TOL">Tolima</option>
                        <option value="VAU">Vaupés</option>
                        <option value="VID">Vichada</option>
                    </select>
                    <input type="number" className="Checkout__Input" placeholder="Código Postal"/>
                </div>
                <input type="number" className="Checkout__Input Checkout__CC" placeholder="Teléfono" />
                <button className="Checkout_Buy">Comprar</button>
            </div>
            <FinalSelection/>
        </div>
    )
}
