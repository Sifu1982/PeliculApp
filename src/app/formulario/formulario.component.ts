import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from '../lista-peliculas/peliculas.service';
import { PELICULAS } from '../db/peliculas.db';
import { Persona } from '../models/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  pelicula: Pelicula;

  formulario: FormGroup;

  constructor(
    private router: Router,
    private peliculasService: PeliculasService
  ) {

    this.pelicula = new Pelicula();

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

    this.pelicula = new Pelicula(PELICULAS.length + 1, titulo, fechaDeEstreno, recaudacion, new Persona(nombreDirector, apellidoDirector), genero, productora, [new Persona(nombreActor1, apellidoActor1)]);

    this.peliculasService.addPelicula(this.pelicula);

    this.onClick('/lista');
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

}
