import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { InicioComponent } from '../inicio/inicio.component';

const rotas: Routes = [
  {path: 'mural-vagas', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: 'painel-vagas', component: PainelVagasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'mural-vagas', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
