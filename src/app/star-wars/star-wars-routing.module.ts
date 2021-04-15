import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarWarsPage } from './star-wars.page';

const routes: Routes = [
  {
    path: '',
    component: StarWarsPage,
    children: [
      {
        path: 'people',
        loadChildren: () => import('../people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: 'films',
        loadChildren: () => import('../films/films.module').then(m => m.FilmsPageModule)
      },
      {
        path: 'vehicles',
        loadChildren: () => import('../vehicles/vehicles.module').then(m => m.VehiclesPageModule)
      },
      {
        path: 'starships',
        loadChildren: () => import('../starships/starships.module').then(m => m.StarshipsPageModule)
      },
      {
        path: '',
        redirectTo: '/star-wars/people',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/star-wars/people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsPageRoutingModule { }
