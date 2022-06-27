import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; //Incluir
import { RegistroComponent } from './pages/registro/registro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './components/menu.component';
import { ListadosModule } from './listados/listados.module';
import { ProductoComponent } from './components/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imports de Angular Material (abajo)
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
//

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CatalogoComponent,
    LoginComponent,
    DetalleComponent,
    MenuComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule ,
    ListadosModule,
    BrowserAnimationsModule,

    //ANGULAR MATERIAL imports:
    MatSidenavModule, MatCardModule, MatSnackBarModule, MatButtonModule, MatInputModule,MatGridListModule, 
    MatTabsModule, MatListModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
