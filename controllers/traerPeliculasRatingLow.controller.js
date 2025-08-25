import fs from "fs";

export function traerPeliculasRatingLow(req, res) {
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
}
