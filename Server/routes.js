const express = require("express");
const router = express.Router();

//EJEMPLO DE PRODUCTOS
const productos = [
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-3_720x.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-3_720x.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-3_720x.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-3_720x.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/6_0231e27f-de59-4bbb-9a71-f53bd72f6d81_720x.png?v=1688147354",
            "https://getrawnutrition.com/cdn/shop/files/7_a9c795a5-316a-4ee3-af5f-54bacfb2644d_720x.png?v=1688147354",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: "1.5 Kg",
        categoria: "Suplementos",
    },


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