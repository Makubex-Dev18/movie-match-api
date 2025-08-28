//define las rutas que va a tener mi aplicacion
import { Router } from "express";
import { traerPeliculas } from "../controllers/traerPeliculas.controller.js";
import { traerPeliculasConteo } from "../controllers/traerPeliculasConteo.controller.js";
import { traerPeliculasTitulo } from "../controllers/traerPeliculasTitulo.controller.js";
import { traerPeliculasRatingTop } from "../controllers/traerPeliculasRatingTop.controller.js";
import { traerPeliculasRatingLow } from "../controllers/traerPeliculasRatingLow.controller.js";
import { traerPeliculasID } from "../controllers/traerPeliculasID.controller.js";
import { traerPeliculasYear } from "../controllers/traerPelliculasYear.controller.js";
import { crearPeliculas } from "../controllers/crearPeliculas.controller.js";
import { actualizarPeliculas } from "../controllers/actualizarPeliculas.controller.js";
import { eliminarPeliculas } from "../controllers/eliminarPeliculas.controller.js";
import { traerDirectores } from "../controllers/traerDirectores.controller.js";
import { traerGeneros } from "../controllers/traerGeneros.controller.js";
import { traerGenerosCount } from "../controllers/traerGenerosCount.controller.js";

//crea la instancia del router
export const api = Router();

//traer
api.get("/peliculas", traerPeliculas);
api.get("/peliculas/count", traerPeliculasConteo);
api.get("/peliculas/rating-top", traerPeliculasRatingTop);
api.get("/peliculas/rating-low", traerPeliculasRatingLow);

api.get("/peliculas/directores", traerDirectores);
api.get("/peliculas/generos", traerGeneros);
api.get("/peliculas/generosCount",traerGenerosCount);


api.get("/peliculas/titulo/:titulo", traerPeliculasTitulo);
api.get("/peliculas/:id", traerPeliculasID);
api.get("/peliculas/year/:year", traerPeliculasYear);

//crear
api.post("/crear-pelicula", crearPeliculas);

//actualizar
api.put("/actualizar-pelicula/:id", actualizarPeliculas);

//eliminar
api.delete("/eliminar-pelicula/:id", eliminarPeliculas);
