import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PokemonComponent } from './pokemon.component';

import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [MainComponent, PokemonComponent, ListaComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent, PokemonComponent, ListaComponent],
})
export class PokemonModule {}
