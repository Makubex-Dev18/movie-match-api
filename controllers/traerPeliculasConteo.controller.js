
import fs from "fs";

export function traerPeliculasConteo(req,res){
    try {
        const data = fs.readFileSync("./data/movies.json", "utf8");
        const peliculas = JSON.parse(data);
        const nroPeliculas = peliculas.length;
        res.json({
          CantidadPeliculas: nroPeliculas,
        });
      } catch (error) {
        res.status(500).json({
          error: "Hubo un error inesperado en el servidor",
        });
      }

}
