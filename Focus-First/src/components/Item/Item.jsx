import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from "../../products/products.request"
import { CartContext } from "../../state/cart.context"
import Spinner from '../Spinner';


const Item = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState('')

    useEffect(() => {
        async function fetchProduct() {
            try {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }

        setTimeout(() => {
            fetchProduct();
        }, 2000);
    }, [id]);

    return (
        <div className='mx-2'>
            {loading ? (
                <Spinner />
            ) : product ? (
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={product.image} className="img-fluid rounded" alt={product.nombre} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.nombre}</h5>
                                            <p className="card-text fw-bold fs-3">Precio: ${product.precio}</p>
                                            <label htmlFor="sizeSelector">Talla:</label>
                                            <select
                                                id="sizeSelector"
                                                value={selectedSize}
                                                onChange={(e) => setSelectedSize(e.target.value)}
                                                className="form-select mb-2"
                                            >
                                                <option value="">Selecciona una talla</option>
                                                {product.tamaño.map((size) => (
                                                    <option key={size} value={size}>
                                                        {size}
                                                    </option>
                                                ))}
                                            </select>
                                            <p className="card-text mt-4">{product.benefits}</p>
                                            <button 
                                                
                                                onClick={() => addToCart({ ...product, selectedSize }, 1)}
                                                className="btn btn-dark mt-4"
                                            >
                                                Agregar al carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            ) : (
                <p className='user-select-none'>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default Item;
