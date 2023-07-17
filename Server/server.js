// Importar los módulos
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// Crear la instancia de Express
const app = express();

// Middlewares - Colócalos antes de las rutas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Crear las rutas - Debe ir después de los middlewares
app.use("/", routes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${port}`);
});
