import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapModule } from './bootstrap/bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BootstrapModule //ultiza os modulos do bootstrap que estiverem aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
