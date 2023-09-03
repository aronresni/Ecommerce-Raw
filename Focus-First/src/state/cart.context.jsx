import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const existingItemIndex = cartList.findIndex(
            (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartList];
            updatedCart[existingItemIndex].qty += qty;
            setCartList(updatedCart);
        } else {
            setCartList([...cartList, { ...item, qty }]);
        }
    };

    const removeList = () => {
        setCartList([]);
    };

    const deleteItem = (id) => {
        const updatedCart = cartList.filter(cartItem => cartItem.id !== id);
        setCartList(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
