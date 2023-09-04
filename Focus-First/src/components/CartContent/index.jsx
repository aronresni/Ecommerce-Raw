import React, { useContext } from 'react';
import { CartContext } from '../../state/cart.context';
import { Link } from "react-router-dom"

const CartContent = () => {
    const { cartList, removeList, deleteItem } = useContext(CartContext);
    const precioTotal = cartList.reduce((total, item) => total + item.precio * item.qty, 0);
    return (
        <div>
            <h3>Carrito de Compras</h3>
            {cartList.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="list-unstyled">
                        {cartList.map((item) => (
                            <li key={item.id} className="list-unstyled">
                                <div className='m-1'>


                                    <div className='d-flex m-32 m-5'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img src={item.image} className="rounded w-50 mx-auto m-3" alt={item.nombre} />
                                        </div>
                                        <div className='row w-50 m-md-5 m-xs-0 m-sm-0'>
                                            <h4>{item.nombre}</h4>
                                            <p>Precio: ${item.precio}</p>
                                            <p>{item.categoria === "Clothes" ? "Talle" : "Tamaño"} {item.selectedSize}</p>
                                            <p>Cantidad: {item.qty}</p>
                                            <div>
                                                <button className="w-100" onClick={() => deleteItem(item.id)}>Eliminar</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${precioTotal.toFixed(2)}</h4>
                </div>
            )}
            <div>
                <button className="m-2" onClick={removeList}>Vaciar Carrito</button>

                {cartList.length === 0 ? (
                    <Link to="/">
                        <button >Selecciona productos para poder seguir con la compra</button>
                    </Link>) : (

                    <Link to="/form">
                        <button >Finalizar la compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CartContent;
