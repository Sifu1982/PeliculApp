import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { ActualizacionDireccionComponent } from './actualizacion-direccion/actualizacion-direccion.component';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaPeliculasComponent,
    ActualizacionComponent,
    ActualizacionDireccionComponent,
    FormularioDireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
