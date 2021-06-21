import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../lista-peliculas/peliculas.service';
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {

  pelicula: Pelicula;
  peliculaId: number;
  formulario: FormGroup

  constructor(
    private router: Router,
    private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.pelicula = new Pelicula();
    this.peliculaId = 0;

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      fechaDeEstreno: new FormControl('', [
        Validators.required
      ]),
      recaudacion: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      genero: new FormControl('', [
        Validators.required
      ]),
      productora: new FormControl('', [
        Validators.required
      ]),
      castPrincipal: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      // console.log(params.peliculaId)
      this.peliculaId = params.peliculaId
    )
  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.pelicula = this.formulario.value;
    let tituloActualizado = this.pelicula.titulo;
    this.peliculasService.updatePelicula(this.peliculaId, tituloActualizado);

    this.onClick('/lista');
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

}
