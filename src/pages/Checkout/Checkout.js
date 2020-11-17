import React, {useContext, useState} from 'react'
import FinalSelection from '../../components/FinalSelection/FinalSelection.js'
import {CartContext} from '../../context/CartContext.js'
import IssaduLogo from '../../assets/Header/Issadun-logo.png'
import APIService from '../../services/APIService.js'
import '../Checkout/Checkout.css'
import { useFormik } from "formik";


const Checkout = () => {
    const {cart} = useContext(CartContext);
    const [amount, setAmount] = useState(0)
    const [orderId, setOrderId] = useState("")
    const [signature, setSignature] = useState("")

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Requerido';
        } 
        if (!values.lastName) {
          errors.lastName = 'Requerido';
        }
        if (!values.email) {
          errors.email = 'Requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Direccion de correo inválida';
        }
        if (!values.cc) {
            errors.cc = 'Requerido';
        } else if (!/^[\d-]+$/.test(values.cc)) {
        errors.cc = 'Cédula/NIT inválida';
        }
        if (!values.address1) {
            errors.address1 = 'Requerido';
        } 
        if (!values.city) {
            errors.city = 'Requerido';
        } 
        if (!values.country) {
            errors.country = 'Requerido';
        } 
        if (!values.province) {
            errors.province = 'Requerido';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Requerido';
        } 
        return errors;
      };
    const formik = useFormik({
        initialValues: { 
            email: "", 
            firstName: "",
            lastName: "",
            cc: "",
            address1: "",
            address2: "",
            city: "",
            country: "",
            province: "",
            zipCode: "",
            phoneNumber: ""
        },
        validate,
        onSubmit: async ({firstName, lastName, email, cc,address1,address2,city,country,province,zipCode,phoneNumber}) => {
           const userInformation = {
               name: firstName+" "+lastName,
               email: email,
               cc: cc,
               phoneNumber:phoneNumber
           } 
           let postUserResponse = await APIService.postUser(userInformation)
           let userId = postUserResponse.data.data

           const shippingInformation = {
                address: address1+" "+address2,
                city: city,
                country: country,
                province: province,
                zipCode: zipCode
            }
            let postShippingResponse = await APIService.postShipping(shippingInformation);
            let shippingId = postShippingResponse.data.data.id
            let  invoiceInformation = {
                user_id: userId,
                coupon_id: null,
                // shippingType: shippingType,
                shipping_id: shippingId,
                items: JSON.stringify(cart)
            }
            let postInvoiceResponse = await APIService.postInvoice(invoiceInformation);
            let signature = postInvoiceResponse.data.data.signature
            setSignature(signature)
            let orderId = postInvoiceResponse.data.data.order.order_number
            setOrderId(orderId)
            let amount = postInvoiceResponse.data.data.order.total_price
            setAmount(amount)
            document.getElementById("paymentButton").submit();
        }
      })



    return (
        <div className="Checkout">
            <div className="Checkout__Separator">
            <form id="mainForm" onSubmit={formik.handleSubmit}>
            <img className="Checkout__Logo" alt="Issadu Logo" src={IssaduLogo}></img>
                <h3 className="Checkout__Label Checkout__Label-Contact">Información de Contacto</h3>
                <div className="Checkout__Email-Parent">
                <input form="mainForm" id="email" name="email" type="email"  onChange={formik.handleChange} value={formik.values.email} className="Checkout__Input Checkout__Mail" placeholder="Correo Electrónico"/>
                {formik.errors.email ? <div className="Checkout__Error"> {formik.errors.email}</div> : null}
                </div>
                <h3 className="Checkout__Label Checkout__Label-Contact">Dirección de envío</h3>
                <div className="Checkout__Flex">
                    <div>
                    <input form="mainForm" id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} className="Checkout__Input Checkout__Name" placeholder="Nombre" />
                    {formik.errors.firstName ? <div className="Checkout__Error">{formik.errors.firstName}</div> : null}
                    </div>
                    
                    <div>
                        <input form="mainForm" id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} className="Checkout__Input"placeholder="Apellido" />
                        {formik.errors.lastName ? <div className="Checkout__Error">{formik.errors.lastName}</div> : null}
                    </div>
                </div>
                <div>
                    <input form="mainForm"  id="cc" name="cc" type="number" onChange={formik.handleChange} value={formik.values.cc}  className="Checkout__Input Checkout__CC" placeholder="Cedula" />
                    {formik.errors.cc ? <div className="Checkout__Error">{formik.errors.cc}</div> : null}
                </div>
                <div>
                <input form="mainForm"  id="address1" name="address1" type="text" onChange={formik.handleChange} value={formik.values.address1} className="Checkout__Input Checkout__CC" placeholder="Dirección" />
                {formik.errors.address1 ? <div className="Checkout__Error">{formik.errors.address1}</div> : null}
                </div>
                <div>
                <input form="mainForm"  id="address2" name="address2" type="text" onChange={formik.handleChange} value={formik.values.address2} className="Checkout__Input Checkout__CC" placeholder="Apartamento, local, etc." />
                </div>
                <div>
                <input form="mainForm"  id="city" name="city" type="text" onChange={formik.handleChange} value={formik.values.city}  className="Checkout__Input Checkout__CC" placeholder="Ciudad" />
                {formik.errors.city ? <div className="Checkout__Error">{formik.errors.city}</div> : null}
                </div>
                
                <div className="Checkout__Flex">
                    <div className="Checkout__Country">
                    <select form="mainForm" className="Checkout__Input Checkout_Location" name="country" id="country" onChange={formik.handleChange} value={formik.values.country} >
                        <option value="" label="País"/>
                        <option value="Colombia" label="Colombia"/>
                    </select>
                    {formik.errors.country ? <div className="Checkout__Error">{formik.errors.country}</div> : null}
                    </div>
                    <div className="Checkout__Province">
                    <select form="mainForm" className="Checkout__Input Checkout_Location" name="province" id="province" onChange={formik.handleChange} value={formik.values.province}>
                        <option value="" label="Departamento"/>
                        <option value="Cali" label="Cali"/>
                        <option value="Valle del Cauca" label="Valle del Cauca"/>
                        <option value="Bogotá" label="Bogotá" />
                        <option value="Amazonas" label="Amazonas"/>
                        <option value="Antioquia" label="Antioquia"/>
                        <option value="Arauca" label="Arauca"/>
                        <option value="Atlántico" label="Atlántico"/>
                        <option value="Bolívar" label="Bolívar"/>
                        <option value="Boyacá" label="Boyacá"/>
                        <option value="Caldas" label="Caldas"/>
                        <option value="Caquetá" label="Caquetá"/>
                        <option value="Casanare" label="Casanare"/>
                        <option value="Cauca" label="Cauca"/>
                        <option value="César" label="César"/>
                        <option value="Chocó" label="Chocó"/>
                        <option value="Córdoba" label="Córdoba"/>
                        <option value="Cundinamarca" label="Cundinamarca"/>
                        <option value="Guainía" label="Guainía"/>
                        <option value="Guaviare" label="Guaviare"/>
                        <option value="Huila" label="Huila"/>
                        <option value="La Guajira" label="La Guajira"/>
                        <option value="Magdalena" label="Magdalena"/>
                        <option value="Meta" label="Meta"/>
                        <option value="Nariño" label="Nariño"/>
                        <option value="Norte de Santander" label="Norte de Santander"/>
                        <option value="Putumayo" label="Putumayo"/>
                        <option value="Quindío" label="Quindío"/>
                        <option value="Risaralda" label="Risaralda"/>
                        <option value="San Andrés, Providencia y Santa Catalina" label="San Andrés, Providencia y Santa Catalina"/>
                        <option value="Santander" label="Santander"/>
                        <option value="Tolima" label="Tolima"/>
                        <option value="Vaupés" label="Vaupés"/>
                        <option value="Vichada" label="Vichada"/>
                    </select>
                    {formik.errors.province ? <div className="Checkout__Error">{formik.errors.province}</div> : null}
                    </div>
                    <div>
                        <input form="mainForm" id="zipCode" name="zipCode" onChange={formik.handleChange} value={formik.values.zipCode} type="number" className="Checkout__Input" placeholder="Código Postal"/>
                        {formik.errors.zipCode ? <div className="Checkout__Error">{formik.errors.zipCode}</div> : null}
                    </div>
                </div>
                <div className="Checkout__Phone">
                <input form="mainForm"  id="phoneNumber" name="phoneNumber" type="number" onChange={formik.handleChange} value={formik.values.phoneNumber} className="Checkout__Input Checkout__CC" placeholder="Teléfono" />
                {formik.errors.phoneNumber ? <div className="Checkout__Error">{formik.errors.phoneNumber}</div> : null}
                </div>
                <input form="mainForm" type="submit" name="Submit" className="Checkout_Buy" value="Comprar"/>
                </form>
            </div>
            <div type="hidden" id="formPayU">
            <form target="_blank" id="paymentButton" method="post" onSubmit={formik.handleSubmit} action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <input form="paymentButton" name="merchantId"    type="hidden"  value="508029"/>
                <input form="paymentButton" name="accountId"     type="hidden"  value="512321"/>
                <input form="paymentButton" name="description"   type="hidden"  value="COMPRAS EN ISSADU.COM"/>
                <input form="paymentButton" name="referenceCode" type="hidden"  value={orderId}/>
                <input form="paymentButton" name="amount"        type="hidden"  value={amount}/>
                <input form="paymentButton" name="tax"           type="hidden"  value="0"/>
                <input form="paymentButton" name="taxReturnBase" type="hidden"  value="0"/>
                <input form="paymentButton" name="currency"      type="hidden"  value="COP"/>
                <input form="paymentButton" name="signature"     type="hidden"  value={signature}/>
                <input form="paymentButton" name="test"          type="hidden"  value="1"/>
                <input form="paymentButton" name="buyerEmail"    type="hidden"  value=""/>
                <input form="paymentButton" name="responseUrl"    type="hidden"  value="https://issadu.com./web/payu/confirmation"/>
                <input form="paymentButton" name="confirmationUrl"    type="hidden"  value="https://issadu.com./web/payu/confirmation"/>
                {/* <input form="paymentButton" name="SubmitPay" type="submit"/> */}
            </form>
            </div>
            <FinalSelection/>
        </div>
    )
}

export default Checkout;