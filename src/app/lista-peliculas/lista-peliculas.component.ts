import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  arrayPeliculas: Pelicula[];

  constructor(private peliculasService: PeliculasService) {
    this.arrayPeliculas = [];
  }

  ngOnInit(): void {
    this.arrayPeliculas = this.peliculasService.getPeliculas();
  }


  eliminarPelicula(pId: number) {
    // Confirmación de borrado de película
    let respuesta = confirm(`Vas a borrar la película ${this.arrayPeliculas[pId].titulo}
    
¿Estás seguro?`);
    if (respuesta === true) {
      // Borrado de película
      this.peliculasService.deletePelicula(pId);
    }
  }

}
