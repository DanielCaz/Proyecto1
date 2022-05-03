import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { CalculadoraComponent } from './contador/calculadora/calculadora.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlHandlerComponent } from './html-handler/html-handler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from './home/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BootstrapComponent,
    HtmlHandlerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    PokemonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
