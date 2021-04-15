import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
