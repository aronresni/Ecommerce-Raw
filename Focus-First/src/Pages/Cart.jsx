import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from "../components/Footer/Footer"
import  CartContent from "../components/CartContent/index" 
import { CartContext } from '../state/cart.context';

const Cart = () => {
    return (
        <div>
            <NavBar />
            <CartContent/>
            <Footer />
        </div>
    )
}

export default Cart
