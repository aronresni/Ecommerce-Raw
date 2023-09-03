import React, { useContext } from 'react'
import { CartContext } from "../../state/cart.context"

const FormContent = () => {
  const { cartList } = useContext(CartContext);
  const precioTotal = cartList.reduce((total, item) => total + item.precio * item.qty, 0);

  return (
    <div>
      <div className="mb-4">
        <h3>Resumen del Carrito</h3>
        <ul>
          {cartList.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.precio} x {item.qty}
            </li>
          ))}
        </ul>
        <h4>Total: ${precioTotal.toFixed(2)}</h4>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="form-control"
            placeholder="Ingrese su número de teléfono"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-control"
            placeholder="Escriba su mensaje aquí"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default FormContent
