import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap
import Spinner from '../Spinner';
import { getProducts } from '../../products/products.request'; // Asegúrate de importar la función getProducts

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const categoria = 'Suplementos';
                const fetchedProducts = await getProducts(categoria);
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }

        // Simulando una demora en la carga
        setTimeout(() => {
            fetchProducts();
        }, 2000);
    }, []);

    const suplementItems = products.filter((item) => item.categoria === "Suplementos");

    return (
        <div className='mx-2'>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h3 className='user-select-none'>Lista de Productos</h3>
                    {suplementItems.length === 0 ? (
                        <p className='user-select-none'>No hay productos disponibles.</p>
                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 m-3 row-cols-md-3 row-cols-lg-4 g-4">
                            {suplementItems.map((item) => (
                                <div key={item.id}>
                                    <Link to={`/producto/${item.id}`} className="card card-sm p-2">
                                        <img src={item.image} className="card-img-top" alt={item.nombre} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nombre}</h5>
                                            <h4 className="card-text">Precio: ${item.precio}</h4>
                                            <p className="card-text">{item.descripcion}</p>
                                            <div className='row'>
                                                <a href="#" className="btn btn-dark p-1 mb-1">Ver</a>
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
