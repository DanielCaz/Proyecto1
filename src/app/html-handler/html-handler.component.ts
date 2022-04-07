import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html-handler',
  templateUrl: './html-handler.component.html',
  styleUrls: ['./html-handler.component.css'],
})
export class HtmlHandlerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  ciudad: string = '';

  @ViewChild('txtCiudad') txtCiudad!: ElementRef<HTMLInputElement>;

  guardar(event: KeyboardEvent, nombre: string) {
    if (event.key === 'Enter') {
      this.nombre = nombre;
    }
  }

  almacenar() {
    console.log('Hola');
  }

  calcularEdad() {
    const inputItem = <HTMLInputElement>document.getElementById('txtEdad');
    console.log(inputItem.value);
    inputItem.value = '';
  }

  darCiudad() {
    console.log(this.txtCiudad.nativeElement.value);
  }
}
