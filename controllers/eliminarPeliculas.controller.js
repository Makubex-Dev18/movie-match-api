import fs from "fs";

export function eliminarPeliculas(req, res) {
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
}
