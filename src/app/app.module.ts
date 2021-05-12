import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/heroe/heroe.component';
import { AppContador } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContador,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
