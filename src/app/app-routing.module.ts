import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", component:HomeComponent},  
  {path:"alta", component:RegistroComponent},
  {path:"ingreso", component: LoginComponent},
  {path:"producto/:id", component:DetalleComponent,}
  //canActivate:[AuthGuard]
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
