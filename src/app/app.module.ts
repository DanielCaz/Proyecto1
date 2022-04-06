import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { CalculadoraComponent } from './contador/calculadora/calculadora.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlHandlerComponent } from './html-handler/html-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BootstrapComponent,
    HtmlHandlerComponent,
  ],
  imports: [BrowserModule, ContadorModule, PokemonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
