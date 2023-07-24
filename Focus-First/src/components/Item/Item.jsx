import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCarousel from "./ProductCarousel"

const Item = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/productos/${id}`)
            .then((response) => {
                setItem(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            {item.id ? (
                <>


                    <div className='d-xs-row d-sm-row d-md-flex'>
                        <ProductCarousel images={item.image} />
                        <div className='flex-sm-row'>
                            <h2>{item.nombre}</h2>
                            <p>Precio: ${item.precio}</p>
                            <p>Tamaño: {item.tamaño}</p>
                            <p>Categoría: {item.categoria}</p>
                            <div className='row'>
                                <button className='btn-dark m-1'>Buy Now</button>
                                <button className='btn-dark m-1'>Add to Cart</button>
                            </div>
                            {item.categoria === "Suplementos" ? (
                                <div>
                                    <button className='btn btn-dark btn-sm dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        SUPPLEMENT FACTS
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <img src={item.imageinfo} alt="Supplement Facts" />
                                    </ul>
                                </div>
                            ) : null}

                        </div>

                    </div>

                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Item;
