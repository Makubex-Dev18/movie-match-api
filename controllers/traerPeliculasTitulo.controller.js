import fs from "fs";

export function traerPeliculasTitulo(req, res) {
  
  try {
    const { titulo } = req.params;
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
}
