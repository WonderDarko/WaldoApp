import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemHumPage } from './tem-hum.page';

const routes: Routes = [
  {
    path: '',
    component: TemHumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemHumPageRoutingModule {}
