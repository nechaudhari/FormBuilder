import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputBoxComponent } from '../input-box/input-box.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputBoxComponent,
    DropdownComponent
  ]
})
export class FormBuilderModule { }
