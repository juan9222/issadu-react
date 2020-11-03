import React, {useEffect} from 'react'
import Header from '../../components/Header/Header.js'
import BestSellers from '../../components/BestSellers/BestSellers.js'
import APIService from '../../services/APIService.js'

function Home() {
    useEffect(() => {
        APIService.getBestSellers()
    }, [])
    return (
    <div className="Home">
        <Header />
        <BestSellers />
    </div>
    )
}

export default Home
