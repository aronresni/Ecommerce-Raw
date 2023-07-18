import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Item = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const productId = props.match.params.id; // Obtiene el ID del producto de los parámetros de la URL

    axios.get(`http://localhost:3000/productos/${productId}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  return (
    <div>
      {item.id ? (
        <div>
          <h2>{item.nombre}</h2>
          <p>Precio: ${item.precio}</p>
          <p>Tamaño: {item.tamaño}</p>
          <p>Categoría: {item.categoria}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Item;
