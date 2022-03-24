import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PokemonComponent } from './pokemon.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, PokemonComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent, PokemonComponent],
})
export class PokemonModule {}
