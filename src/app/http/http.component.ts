import { Component, OnInit } from '@angular/core';
import { HttpServService } from './http-serv.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  nombrePokemon: string = '';
  get infoPokemon() {
    return this.service.info;
  }

  constructor(private service: HttpServService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.obtenerInfo(this.nombrePokemon.toLowerCase());
  }
}
