import { Injectable } from '@angular/core';
import { PELICULAS } from '../db/peliculas.db';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas() {
    return PELICULAS;
  }

  addPelicula(pPelicula: Pelicula) {
    pPelicula.id++;
    PELICULAS.push(pPelicula);
  }

  deletePelicula(pId: number) {
    PELICULAS.splice(pId, 1);
  }

  // Actualizaciones. Encapsulado de todos los métodos para poder usarlos si la aplicación crece

  updateTitulo(pId: number, pNewTitulo: string) {
    PELICULAS[pId].titulo = pNewTitulo;
  }

  updateFechaDeEstreno(pId: number, pNewFechaDeEstreno: Date) {
    PELICULAS[pId].fechaDeEstreno = pNewFechaDeEstreno;
  }

  updateRecaudacion(pId: number, pNewRecaudacion: number) {
    PELICULAS[pId].recaudacion = pNewRecaudacion;
  }

  updateDireccion(pId: number, pNewDirectorNombre: string, pNewDirectorApellido: string) {
    PELICULAS[pId].direccion.nombre = pNewDirectorNombre;
    PELICULAS[pId].direccion.primerApellido = pNewDirectorApellido;
  }

  updateGenero(pId: number, pNewGenero: string) {
    PELICULAS[pId].genero = pNewGenero;
  }

  updateProductora(pId: number, pNewProductora: string) {
    PELICULAS[pId].productora = pNewProductora;
  }

  updateCastPrincipal(pId: number, pIdCastPrincipal: number, pNewActorNombre: string, pNewActorApellido: string) {
    PELICULAS[pId].castPrincipal[pIdCastPrincipal].nombre = pNewActorNombre;
    PELICULAS[pId].castPrincipal[pIdCastPrincipal].primerApellido = pNewActorApellido;
  }

  // Aglutino todas las funciones de update en una sola

  updatePelicula(pId: number, pNewTitulo: string, pNewFechaDeEstreno: Date, pNewRecaudacion: number, pNewDirectorNombre: string, pNewDirectorApellido: string, pNewGenero: string, pNewProductora: string, pIdCastPrincipal: number, pNewActorNombre: string, pNewActorApellido: string) {
    this.updateTitulo(pId, pNewTitulo);
    this.updateFechaDeEstreno(pId, pNewFechaDeEstreno);
    this.updateRecaudacion(pId, pNewRecaudacion);
    this.updateDireccion(pId, pNewDirectorNombre, pNewDirectorApellido);
    this.updateGenero(pId, pNewGenero);
    this.updateProductora(pId, pNewProductora);
    this.updateCastPrincipal(pId, pIdCastPrincipal, pNewActorNombre, pNewActorApellido);
  }

}
