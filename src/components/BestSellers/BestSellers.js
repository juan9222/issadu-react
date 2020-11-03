import React from 'react'
import './BestSellers.css'
import BestSellerImage from '../../assets/BestSellers/best-seller.png'
import Swimsuits from '../Swimsuits/Swimsuits.js'


const BestSellers = props => {
    return (
        <div className="BestSellers">
            <h2 className="BestSellers__Title">LOS MÁS <span className="BestSellers__Sellers">VENDIDOS</span> </h2>
            <img className="BestSellers__Image" src={BestSellerImage} alt="Mar sol arena Issadun vestidos de baño" />
            <Swimsuits />
        </div>
    )
}


export default BestSellers