import fs from "fs";

export function traerPeliculasYear(req, res) {
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
}
