//definimos la logica para traer todas las peliculas

import fs from "fs";

export function traerPeliculas(req, res) {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
}
