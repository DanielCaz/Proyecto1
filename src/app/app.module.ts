import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { CalculadoraComponent } from './contador/calculadora/calculadora.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [AppComponent, CalculadoraComponent, BootstrapComponent],
  imports: [BrowserModule, ContadorModule, PokemonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
