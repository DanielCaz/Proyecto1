import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent {
  constructor(private servicioPokemon: PokemonService) {}

  get listaPokemon() {
    return this.servicioPokemon.obtenerLista;
  }

  nuevo: Pokemon = {
    nombre: '',
    pc: 0,
  };
}
