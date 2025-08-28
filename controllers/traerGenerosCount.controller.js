import fs from "fs";

export function traerGenerosCount(req, res) {
  try {
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);
    const generosCount = {};
    peliculas.forEach((p) => {
      if (p.genre) {
        p.genre.split(",").forEach((g) => {
          const genero = g.trim();
          generosCount[genero] = (generosCount[genero] || 0) + 1;
        });
      }
    });
    // Ordenar por nombre de género
    const generosOrdenados = Object.keys(generosCount).sort((a, b) =>
      a.localeCompare(b)
    );
    const resultado = {};
    generosOrdenados.forEach((g) => {
      resultado[g] = generosCount[g];
    });
    const total = Object.values(resultado).reduce((acc, val) => acc + val, 0);
    res.json({ conteo: resultado, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al leer el archivo de peliculas",
    });
  }
}
