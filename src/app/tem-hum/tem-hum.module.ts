import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemHumPageRoutingModule } from './tem-hum-routing.module';

import { TemHumPage } from './tem-hum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemHumPageRoutingModule
  ],
  declarations: [TemHumPage]
})
export class TemHumPageModule {}
