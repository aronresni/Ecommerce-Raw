import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../state/cart.context";

const CartWidget = () => {
    const { cartList } = useContext(CartContext);
    const getCartCant = cartList.reduce((total, item) => total + item.qty, 0);

    return (
        <div>
            <Link to="/cart">
                <AiOutlineShoppingCart />
            </Link>
            {getCartCant ? <h3>{getCartCant}</h3> : null}

        </div>
    );
};

export default CartWidget;
