import React, { useContext } from 'react';
import { CartContext } from '../../state/cart.context';

const CartContent = () => {
    const { cartList, removeList, deleteItem } = useContext(CartContext);

    return (
        <div>
            <h3>Carrito de Compras</h3>
            {cartList.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartList.map((item) => (
                        <li key={item.id}>
                            <div>
                                <img src={item.image} />
                                <h4>{item.nombre}</h4>
                                <p>Precio: ${item.precio}</p>
                                <p>Talla: {item.selectedSize}</p> {/* Si has agregado tallas */}
                                <p>Cantidad: {item.qty}</p>
                                <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={removeList}>Vaciar Carrito</button>
        </div>
    );
};

export default CartContent;
