import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../lista-peliculas/peliculas.service';
import { Pelicula } from '../models/pelicula.model';
import { Persona } from '../models/persona.model';

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
        Validators.required,
        // Expresión regular para fecha dd/mm/aaaa
        Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])[/ /.](0[1-9]|1[012])[/ /.](19|20)\d\d$/)
      ]),
      recaudacion: new FormControl('', [
        Validators.required,
        // Expresión regular para número natural
        Validators.pattern(/^[0-9]*$/)
      ]),
      nombreDirector: new FormControl('', [
        Validators.required
      ]),
      apellidoDirector: new FormControl('', [
        Validators.required
      ]),
      genero: new FormControl('', [
        Validators.required
      ]),
      productora: new FormControl('', [
        Validators.required
      ]),
      nombreActor1: new FormControl('', [
        Validators.required
      ]),
      apellidoActor1: new FormControl('', [
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
    console.log(this.formulario.value);
    let formValue = this.formulario.value;
    let titulo = formValue.titulo;
    let fechaDeEstreno = formValue.fechaDeEstreno;
    let recaudacion = formValue.recaudacion;
    let nombreDirector = formValue.nombreDirector;
    let apellidoDirector = formValue.apellidoDirector;
    let genero = formValue.genero;
    let productora = formValue.productora;
    let nombreActor1 = formValue.nombreActor1;
    let apellidoActor1 = formValue.apellidoActor1;

    this.pelicula = new Pelicula(this.peliculaId, titulo, fechaDeEstreno, recaudacion, new Persona(nombreDirector, apellidoDirector), genero, productora, [new Persona(nombreActor1, apellidoActor1)]);


    let tituloActualizado = this.pelicula.titulo;
    let fechaActualizada = this.pelicula.fechaDeEstreno;
    let recaudacionActualizada = this.pelicula.recaudacion;
    let direccionNombreActualizado = this.pelicula.direccion.nombre;
    let direccionApellidoActualizado = this.pelicula.direccion.primerApellido;
    let generoActualizado = this.pelicula.genero;
    let productoraActualizada = this.pelicula.productora;
    let actorPrincipalNombreActualizado = this.pelicula.castPrincipal[0].nombre;
    let actorPrincipalapellidoActualizado = this.pelicula.castPrincipal[0].primerApellido;

    this.peliculasService.updatePelicula(this.peliculaId, tituloActualizado, fechaActualizada, recaudacionActualizada, direccionNombreActualizado, direccionApellidoActualizado, generoActualizado, productoraActualizada, 0, actorPrincipalNombreActualizado, actorPrincipalapellidoActualizado);

    this.onClick('/lista');
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

}
