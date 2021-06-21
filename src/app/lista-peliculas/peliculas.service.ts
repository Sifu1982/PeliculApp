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

  updatePelicula(pId: number, pNewTitulo: string) {
    this.updateTituloPelicula(pId, pNewTitulo);
  }

  updateTituloPelicula(pId: number, pNewTitulo: string) {
    PELICULAS[pId].titulo = pNewTitulo;
  }

}
