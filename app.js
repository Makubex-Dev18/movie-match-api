/*
    const express = require ('express')
    const app=express()
    const port=3000
*/

import express from "express";
import fs from "fs";

//import { json } from "stream/consumers";
//la importacion del router
import { api } from "./routes/peliculas.routes.js";

//import { traerPeliculasTitulo} from "./controllers/traerPeliculasTitulo.controller.js";
//import { traerPeliculasConteo } from "./controllers/traerPeliculasConteo.controller.js";

//vamos a crear una instancia de nuestro servidor
const app = express();
// siempre un servidor va a tener un puerto
const port = 3000;

app.use(express.json());
app.use(api);

app.listen(port, () => {
  console.log(`Mi servidor esta corriendo en el puerto ${port}`);
});

// endpoint
/*
app.get("/saludo", (req, res) => {
   // res.send("¡Hola, mundo!");
   res.json({
     "mensaje": "¡Hola, mundo prueba!" })
});
*/
/*
crear un endpoint de tipo get, que retorne todo el json de peliculas.El endpoint debe 
llamarse /peliculas
*/

//app.get("/peliculas/count", traerPeliculasConteo);

//app.get("/peliculas/:titulo", traerPeliculasTitulo);

/*
app.get("/movies", (req, res) => {
  const { genre } = req.query; // lee el query param

  let results = movies;

  if (genre) {
    console.log("Filtrando por género:");
    results = results.filter(
      (movie) =>
        movie.genre &&
        movie.genre.some((g) => g.toLowerCase().includes(genre.toLowerCase()))
    );
  }

  res.json(results);
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
*/

/*crear un endpoint  de tipo get,que retorne el numero de peliculas disponible que tengo en el archivo
el endpoint debe llamarse /peliculas/count
*/

//reto 01-02
/*crear un endpoint de tipo get, que retorne las peliculas con un
imdb_rating mayor a 9 , el endpoint debe de llamarse /peliculas/rating-top

crear un endpoint de tipo get, que retorne las peliculas con un
imdb_rating menor a 5 , el endpoint debe de llamarse /peliculas/rating-low

tip:
deben usar el metood filter de los arrays para poder traer las peliculas
con rating mayor o menor segun corresponda
*/
/*
app.get("/peliculas/rating-top", (req, res) => {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const peliculasTop = peliculas.filter((p) => p.imdb_rating >= 9);
    res.json(peliculasTop);
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/
/*
app.get("/peliculas/rating-low", (req, res) => {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const peliculasLow = peliculas.filter((p) => p.imdb_rating <= 5);
    res.json(peliculasLow);
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/

//creo un endpoint que el año de lanzamiento de pelicula sea mayor al 2000
/*
app.get("/peliculas/year2000", (req, res) => {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const peliculas2000 = peliculas.filter((e) => e.year >= 2000);
    res.json(peliculas2000);
    console.log("entro");
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/
//buscar por un id

/*
app.get("/peliculas/:id", (req, res) => {
  try {
    const id = req.params.id;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    const peliculaBuscada = peliculas.find((e) => e.id === id);
    if (!peliculaBuscada) {
      return res.json({
        Mensaje: "Pelicula no encontrada",
      });
    }
    res.json(peliculaBuscada);
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/

//buscar peliculas por año
/*
app.get("/peliculas/year/:year", (req, res) => {
  try {
    const año = req.params.year;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    const añoBuscado = peliculas.filter((e) => e.year === Number(año));

    if (añoBuscado.length == 0) {
      return res.json({ mensaje: "Año de pelicula no encontrada" });
    }
    res.json(añoBuscado);
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/

/* post */
//app.use(express,json());

//midelaware

// Middleware para poder leer JSON en req.body
//app.use(express.json());
/*
app.post("/crear-pelicula", (req, res) => {
  try {
    const recibido = req.body;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    //peliculas.push(recibido)

    //modifica el archivo de peliculas
    fs.writeFileSync(
      "./data/movies.json",
      JSON.stringify([...peliculas, recibido])
    );

    res.json({
      msg: "pelicula creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/

//modificar put y patch diferencias el put modifica todos los campos y patch solo algunos especificos

//arquitectura mvc
/*
app.put("/actualizar-pelicula/:id", (req, res) => {
  try {
    //1.capturamos el valor del parametro dinamico
    const id = req.params.id;
    //2.capturamos la informacion que el cliente nos envia
    const dataRecibida = req.body;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    //3.buscar la pelicula que se va actualizar
    const peliculaEncontrada = peliculas.find((peli) => peli.id === id);

    //4.vamos a actualizar los valores de la pelicula
    peliculaEncontrada.title = dataRecibida.title;

    //5.vamos a cambiar el archivo de peliculas
    fs.writeFileSync("./data/movies.json", JSON.stringify(peliculas));

    res.json({
      msg: "Pelicula actualizada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/

/*delete 
el cliente nos debe de enviar el id de la pelicula que se va a eliminar*/
/*
app.delete("/eliminar-pelicula/:id", (req, res) => {
  try {
    const id = req.params.id;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    const peliculasActualizadas = peliculas.filter((e) => e.id !== id);

    //vamos a reescribir el archivo de peliculas
    fs.writeFileSync(
      "./data/movies.json",
      JSON.stringify(peliculasActualizadas)
    );

    res.json({
      msg: "pelicula eliminada",
    });
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
});
*/
