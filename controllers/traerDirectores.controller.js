import fs from "fs";

export function traerDirectores(req, res) {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const directoresSet = new Set();
    peliculas.forEach((p) => {
      if (p.director) {
        p.director.split(",").forEach((g) => directoresSet.add(g.trim()));
      }
    });
    const directores = Array.from(directoresSet).sort((a, b) =>
      a.localeCompare(b)
    );
    res.json({ directores });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
}
