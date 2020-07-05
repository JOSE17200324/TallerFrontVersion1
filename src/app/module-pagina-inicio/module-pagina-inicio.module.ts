import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuestrosProductosComponent } from './nuestros-productos/nuestros-productos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

// imports material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LoginComponent, NuestrosProductosComponent, OfertasComponent, RecetasComponent, HomeComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
     /* Material*/
     MatToolbarModule,
     MatIconModule,
     MatTabsModule,
     MatButtonModule
  ],
  exports: [
    LoginComponent,
    NuestrosProductosComponent,
    OfertasComponent,
    RecetasComponent,
    HomeComponent,
    MenuComponent
  ]
})
export class ModulePaginaInicioModule { }
