import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lista' },
  { path: 'lista', component: ListaPeliculasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'actualizacion/:peliculaId', component: ActualizacionComponent },
  { path: '**', redirectTo: '/lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
