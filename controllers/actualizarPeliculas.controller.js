import fs from "fs";

export function actualizarPeliculas(req, res) {
  try {
    //1.capturamos el valor del parametro dinamico
    const id = req.params.id;
    //2.capturamos la informacion que el cliente nos envia
    const dataRecibida = req.body;
    const data = fs.readFileSync("./data/movies.json", "utf8");
    const peliculas = JSON.parse(data);

    //3.buscar la pelicula que se va actualizar
    const peliculaEncontrada = peliculas.find((peli) => peli.id === id);

    //4.vamos a actualizar los valores de la pelicula
    peliculaEncontrada.title = dataRecibida.title;

    //5.vamos a cambiar el archivo de peliculas
    fs.writeFileSync("./data/movies.json", JSON.stringify(peliculas));

    res.json({
      msg: "Pelicula actualizada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error inesperado en el servidor",
    });
  }
}
