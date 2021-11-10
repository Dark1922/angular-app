import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule

  ],
  exports: [
    MatToolbarModule, //que exportar pra quem quiser usar os modulos do material
    MatExpansionModule,
    MatCardModule
  ]
})
export class MaterialModule { }
