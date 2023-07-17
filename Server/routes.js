const express = require("express");
const router = express.Router();

//EJEMPLO DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Proteina Ultra Mass",
        precio: 10999,
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 2,
        nombre: "Proteina Ultra Mass",
        precio: 10999,
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 3,
        nombre: "Proteina Ultra Mass",
        precio: 10999,
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    }
]

// Ruta para obtener todos los productos
router.get("/productos", (req, res) => {
    res.json(productos);
});

// Ruta para obtener un producto específico por su ID
// Añade la barra diagonal (/) antes de "productos/:id"
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id === parseInt(id));

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

module.exports = router;