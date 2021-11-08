import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [   //exporta pra quem precisar do elemento do bootstrap
    ModalModule
  ]
})
export class BootstrapModule { }
