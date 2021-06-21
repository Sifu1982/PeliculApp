import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from '../lista-peliculas/peliculas.service';

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

  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.pelicula = this.formulario.value;
    this.peliculasService.addPelicula(this.pelicula);

    this.onClick('/lista');
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

}
