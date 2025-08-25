import fs from "fs";

export function traerPeliculasYear2000(req, res) {
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
}
