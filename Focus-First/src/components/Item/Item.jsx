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
                <div>
                    <h3 className='user-select-none'>{product.nombre}</h3>
                    <div className="card card-sm p-1">
                        <img src={product.image} className="card-img-top" alt={product.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <h4 className="card-text">Precio: ${product.precio}</h4>
                            <p className="card-text">{product.benefits}</p>

                            <img src={product.imagewallpaper} alt="Imagen Wallpaper" />
                            <div className='row'>
                                <a
                                    href="#"
                                    onClick={() => addToCart({ ...product, selectedSize }, 1)}
                                    className="btn btn-dark p-1 mt-1"
                                >
                                    Agregar al carrito
                                </a>
                            </div>
                            <div className='row'>
                                <label htmlFor="sizeSelector">Talla:</label>
                                <select
                                    id="sizeSelector"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    <option value="">Selecciona una talla</option>
                                    {product.tamaño.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
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
