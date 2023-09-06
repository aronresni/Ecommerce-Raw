import swal from 'sweetalert2';
import React, { useContext, useState } from 'react'
import { CartContext } from "../../state/cart.context"

const FormContent = () => {
  const [orders, setOrders] = useState([]);
  const { cartList } = useContext(CartContext);
  const precioTotal = cartList.reduce((total, item) => total + item.precio * item.qty, 0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    calle: '',
    codigoPostal: '',
    provincia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const createOrder = () => {
    const order = {
      customer: {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
        calle: formData.calle,
        codigoPostal: formData.codigoPostal,
        provincia: formData.provincia
      },
      items: cartList.map(item => ({
        nombre: item.nombre,
        precio: item.precio,
        qty: item.qty,
      })),
      total: precioTotal.toFixed(2),
      // Agrega otros campos de la orden según sea necesario
    };

    // Agrega la nueva orden al estado 'orders'
    setOrders([...orders, order]);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      calle: '',
      codigoPostal: '',
      provincia: '',
    });
    swal.fire(
      'Good job!',
      'success'
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createOrder()
  };
  return (
    <div className='row'>
      <div className="mb-4">
        <h3>Resumen del Carrito</h3>
        <ul className='list-unstyled'>
          {cartList.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.precio} x {item.qty}
            </li>
          ))}
        </ul>
        <h4>Total: ${precioTotal.toFixed(2)}</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center">

        <form className="w-50" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              placeholder="Ingrese su nombre"
              value={formData.nombre}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.telefono}
              onChange={handleChange}
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
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="calle">Calle</label>
            <input
              type="text"
              id="calle"
              name="calle"
              className="form-control"
              placeholder="Ingrese su calle"
              value={formData.calle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              className="form-control"
              placeholder="Ingrese su código postal"
              value={formData.codigoPostal}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="provincia">Provincia</label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              className="form-control"
              placeholder="Ingrese su provincia"
              value={formData.provincia}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark mt-4">
            Continuar con el pago
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormContent
