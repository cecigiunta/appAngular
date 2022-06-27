import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderListadoComponent } from './header-listado/header-listado.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HeaderListadoComponent,
    ResultadosComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]

})
export class ListadosModule { }
