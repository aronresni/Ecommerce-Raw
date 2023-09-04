import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../state/cart.context";

const CartWidget = () => {
    const { cartList } = useContext(CartContext);
    const getCartCant = cartList.reduce((total, item) => total + item.qty, 0);

    return (
        <div className="d-flex justify-content-center">
            <Link to="/cart">
                <AiOutlineShoppingCart size={30} />
            </Link>
            {getCartCant ? <h3 className="p-1 text-secondary">{getCartCant}</h3> : null}

        </div>
    );
};

export default CartWidget;
