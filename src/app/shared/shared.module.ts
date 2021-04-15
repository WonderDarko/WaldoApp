import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[SearchbarComponent]
})
export class SharedModule { }
