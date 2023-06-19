import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { FormComponent } from '../form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormBuilderModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
