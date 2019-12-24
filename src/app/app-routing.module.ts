import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando as paginas para fazer a rota da aplicação.
import { HomeComponent } from "./pages/home/home.component";
import { DetailComponent } from "./pages/detail/detail.component";

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  pathMatch: "full"
  },
  {
  path: "detail/:albumId",
  component: DetailComponent
  },
  {
  path: "**",
  component: HomeComponent
  }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
