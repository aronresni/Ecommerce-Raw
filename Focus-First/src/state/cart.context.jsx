import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const existingItem = cartList.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cartList.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + qty } : cartItem
            );
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
