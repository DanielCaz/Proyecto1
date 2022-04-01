import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  private pokemonList: Pokemon[] = [
    {
      nombre: 'charmander',
      pc: 500,
    },
    {
      nombre: 'squirtle',
      pc: 550,
    },
    {
      nombre: 'vaporeon',
      pc: 750,
    },
  ];

  get obtenerLista() {
    return [...this.pokemonList];
  }

  agregar(nuevoPokemon: Pokemon) {
    this.pokemonList.push(nuevoPokemon);
  }
}
