import React, {useState, useEffect} from 'react'
import './Swimsuits.css'
//import LikeUnchecked  from '../../assets/Swimsuits/like.png'
// import LikeChecked  from '../../assets/Swimsuits/like-selected.png'
import APIService from '../../services/APIService.js'


import { Link } from 'react-router-dom'

function Swimsuits() {
    useEffect(() => {
        getBestSellers();
    }, [])

    async function getBestSellers() {
        let response = await APIService.getBestSellers();
        setBestSellers(response)
     }

    const [ bestSellers, setBestSellers ] = useState([])

    return (
        <div className="Swimsuits">
            {
                bestSellers.map( swimsuit => (
                    <div className="Swimsuits__Column"  key={swimsuit.id}>
                        <img className="Swimsuits__Image" src={`http://issadu.com/web/${swimsuit.url_img}`} alt="Modelo" />
                        <div className="Swimsuits__Subcolumn">
                            <h3 className="Swimsuits__Sub">{swimsuit.description}</h3>
                            <div className="Swimsuits__Flex">
                                <h3 className="Swimsuits__Value">{swimsuit.price + " $"}</h3>
                                <h3 className="Swimsuits__Discount">{Math.floor(swimsuit.price * (1 - (swimsuit.discount * 0.01)))+ " $"}</h3>
                            </div>
                            
                            <div className="Swimsuits__Row"> 
                                <Link to="/customizer" className="Swimsuits__Button-Customize">PERSONALIZAR</Link>
                                <Link to="/customizer" className="Swimsuits__Button-Buy">COMPRAR</Link>
                            </div>
                        </div>
                    </div>
                    
                    
                ))
            }
        </div>
    )
}

export default Swimsuits
