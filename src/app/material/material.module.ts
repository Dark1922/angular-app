import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule //que exportar pra quem quiser usar os modulos do material
  ]
})
export class MaterialModule { }
