import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap

const ItemSuple = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/productos")
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const suplementosItems = items.filter((item) => item.categoria === "Suplementos");

    return (
        <div className='mx-2'>
            <h3 className='user-select-none'>Lista de Productos</h3>
            {suplementosItems.length === 0 ? (
                <p className='user-select-none'>No hay productos disponibles.</p>
            ) : (
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {suplementosItems.map((item) => (
                        <div key={item.id}>
                            <Link to={`/producto/${item.id}`} className="card card-sm p-1">
                                <img src={item.image[0]} className="card-img-top" alt={item.nombre} />
                                <div className="card-body ">
                                    <h5 className="card-title ">{item.nombre}</h5>
                                    <h4 className="card-text">Precio: ${item.precio}</h4>
                                    <p className="card-text">{item.descripcion}</p>
                                    <div className='row'>
                                        <a href="#" className="btn btn-dark p-1 mb-1">Ver </a>
                                        <a href="#" className="btn btn-dark p-1 mt-1">Agregar al carrito</a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemSuple;
