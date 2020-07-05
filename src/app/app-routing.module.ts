import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module-pagina-inicio/login/login.component';
import { NuestrosProductosComponent } from './module-pagina-inicio/nuestros-productos/nuestros-productos.component';
import { RecetasComponent } from './module-pagina-inicio/recetas/recetas.component';
import { OfertasComponent } from './module-pagina-inicio/ofertas/ofertas.component';
import { HomeComponent } from './module-pagina-inicio/home/home.component';
import { MenuComponent } from './module-pagina-inicio/menu/menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productos', component: NuestrosProductosComponent},
  {path: 'recetas', component: RecetasComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
