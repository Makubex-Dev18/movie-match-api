import fs from "fs";

export function traerPeliculasID(req, res) {
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
}
