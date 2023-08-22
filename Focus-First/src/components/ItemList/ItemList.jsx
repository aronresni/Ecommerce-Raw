import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Spinner from '../Spinner';
import { getProducts } from '../../products/products.request'; 
import { CartContext } from '../../state/cart.context';

const ItemList = () => {

    const { cartList, addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const categoria = 'Clothes';
                const fetchedProducts = await getProducts(categoria);
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }

        setTimeout(() => {
            fetchProducts();
        }, 2000);
    }, []);

    const clothesItems = products.filter((item) => item.categoria === "Clothes");

    return (
        <div className='mx-2'>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h3 className='user-select-none'>Lista de Productos</h3>
                    {clothesItems.length === 0 ? (
                        <p className='user-select-none'>No hay productos disponibles.</p>
                    ) : (
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                            {clothesItems.map((item) => (
                                <div key={item.id}>
                                    <Link to={`/producto/${item.id}`} className="card card-sm p-1">
                                        <img src={item.image} className="card-img-top" alt={item.nombre} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nombre}</h5>
                                            <h4 className="card-text">Precio: ${item.precio}</h4>
                                            <p className="card-text">{item.descripcion}</p>
                                            <div className='row'>
                                                <a href="#" className="btn btn-dark p-1 mb-1">Ver</a>
                                                <a href="#" onClick={() => addToCart(item, 1)} className="btn btn-dark p-1 mt-1">Agregar al carrito</a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemList;
