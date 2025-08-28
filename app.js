/*
    const express = require ('express')
    const app=express()
    const port=3000
*/

import express from "express";
import cors from "cors";
import fs from "fs";

//import { json } from "stream/consumers";
//la importacion del router
import { api } from "./routes/peliculas.routes.js";
import { logRequest } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { responseOK } from "./middlewares/resHandler.js";

// Swagger UI
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDoc = YAML.load("./docs/swagger.yaml");

//vamos a crear una instancia de nuestro servidor
const app = express();

app.use(cors());

//esto debe estar antes de las rutas el middleware(AL INICIO)
app.use(logRequest);

app.use(responseOK);

//MVC
app.use(express.json());

app.use(api);

// Documentación interactiva Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//pruebas
/*app.get("/", (req, res) => {
  res.json({ message: "hola estoy vivo" });
});

app.get("/luis", (req, res) => {
  res.json({ message: "hola luis" });
});

app.get("/error",(req,res)=>{
  throw new Error("yo soy un error");
})
*/

//app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));

//aplicar middleware de errores (AL FINAL)

//app.use(errorHandler);

//app.listen(3000, () => console.log("estoy vivo"));

//MVC

// siempre un servidor va a tener un puerto
const port = 3000;

app.listen(port, () => {
  console.log(`Mi servidor esta corriendo en el puerto ${port}`);
});
