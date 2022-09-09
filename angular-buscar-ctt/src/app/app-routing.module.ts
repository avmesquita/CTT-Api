import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchApartadoComponent } from './components/search-apartado/search-apartado.component';
import { SearchCodigoPostalComponent } from './components/search-codigo-postal/search-codigo-postal.component';
import { SearchConcelhoComponent } from './components/search-concelho/search-concelho.component';
import { SearchDistritoComponent } from './components/search-distrito/search-distrito.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'codigo-postal'
  },
  {
    path: 'apartado',
    component: SearchApartadoComponent
  },
  {
    path: 'codigo-postal',
    component: SearchCodigoPostalComponent
  },
  {
    path: 'concelho',
    component: SearchConcelhoComponent
  },
  {
    path: 'distrito',
    component: SearchDistritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
