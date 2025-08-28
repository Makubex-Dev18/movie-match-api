import fs from "fs";

export function traerGeneros(req, res) {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const generosSet = new Set();
    peliculas.forEach((p) => {
      if (p.genre) {
        p.genre.split(",").forEach((g) => generosSet.add(g.trim()));
      }
    });
    const generos = Array.from(generosSet).sort((a, b) => a.localeCompare(b));
    res.json({ generos });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
}
