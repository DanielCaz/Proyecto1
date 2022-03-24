import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  nuevo: Pokemon = {
    nombre: '',
    pc: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  listaPokemon: Pokemon[] = [
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

  agregarPokemon() {
    this.listaPokemon.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      pc: 0,
    };
  }
}
