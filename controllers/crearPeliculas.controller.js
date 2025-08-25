import fs from "fs";
//app.use(express.json());

export function crearPeliculas(req, res) {
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
}
