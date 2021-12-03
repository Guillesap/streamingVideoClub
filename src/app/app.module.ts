import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AbonoComponent } from './abono/abono.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    PeliculasComponent,
    FooterComponent,
    HeaderComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    AbonoComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
