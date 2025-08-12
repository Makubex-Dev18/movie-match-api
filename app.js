/*
    const express = require ('express')
    const app=express()
    const port=3000
*/
import fs from "fs";
import express from "express";
//vamos a crear una instancia de nuestro servidor
const app = express();
// siempre un servidor va a tener un puerto
const port = 3000;

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

app.get("/movies", (req, res) => {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
});

app.get("/movies/:titulo", (req, res) => {
  const { titulo } = req.params;
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const pelicula = peliculas.find((p) => p.title === titulo);
    if (pelicula) {
      res.json(pelicula);
    } else {
      res.status(404).json({
        error: "Pelicula no encontrada",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
});


app.get('/movies', (req, res) => {
  const { genre } = req.query; // lee el query param

  let results = movies;

  if (genre) {
      console.log("Filtrando por género:");
    results = results.filter(movie =>
            movie.genre &&
      movie.genre.some(g =>
        g.toLowerCase().includes(genre.toLowerCase())
      )
    );
  }

  res.json(results);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});