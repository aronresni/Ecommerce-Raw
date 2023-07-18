import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(1);
    const aumentarContador = () => {
        setContador(contador + 1);
    };
    const disminuirContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }



    return (
        <div>
            <button className='btn' onClick={disminuirContador}>-</button>
            <h6>Cantidad: {contador}</h6>
            <button className='btn' onClick={aumentarContador}>+</button>
        </div>
    )
}

export default ItemCount
