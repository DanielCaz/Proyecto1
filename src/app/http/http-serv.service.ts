import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonAPI } from './http.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpServService {
  info!: PokemonAPI;

  constructor(private http: HttpClient) {}

  obtenerInfo(nombre: string) {
    this.http
      .get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .subscribe((data) => {
        this.info = data;
      });
  }
}
