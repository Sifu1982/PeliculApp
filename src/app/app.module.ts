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

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaPeliculasComponent,
    ActualizacionComponent
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
