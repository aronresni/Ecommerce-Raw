import React, { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap

const ItemList = () => {
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

    return (
<div>
            <h1>Lista de Productos</h1>
            {items.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {items.map((item) => (
                        <div key={item.id} className="col">
                            <div className="card h-100">
                                <img src={item.image[0]} className="card-img-top" alt={item.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text">Precio: ${item.precio}</p>
                                    <p className="card-text">{item.descripcion}</p>
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;
