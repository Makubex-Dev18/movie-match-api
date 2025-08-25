import fs from "fs";

export function traerPeliculasRatingTop(req, res) {
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
}
