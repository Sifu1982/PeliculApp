import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from '../lista-peliculas/peliculas.service';
import { Persona } from '../models/persona.model';


@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.css']
})
export class FormularioDireccionComponent implements OnInit {

  director: Persona;
  formularioDireccion: FormGroup;

  constructor(private peliculasService: PeliculasService) {

    this.director = new Persona();

    this.formularioDireccion = new FormGroup({
      directorNombre: new FormControl('', [
        Validators.required
      ]),
      directorApellido: new FormControl('', [
        Validators.required
      ])
    });


  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.formularioDireccion.value);
    this.director = this.formularioDireccion.value;
    console.log(this.director);
    // this.peliculasService.addDirector('', '')

  }
}
