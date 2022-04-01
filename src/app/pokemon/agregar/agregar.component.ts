import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  nuevo: Pokemon = {
    nombre: '',
    pc: 0,
  };

  constructor(private servicioPokemon: PokemonService) {}

  agregarPokemon() {
    this.servicioPokemon.agregar(this.nuevo);
    this.nuevo = {
      nombre: '',
      pc: 0,
    };
  }
}
