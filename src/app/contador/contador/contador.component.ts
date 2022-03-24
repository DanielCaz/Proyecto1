import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  contador: number = 0;
  base: number = 5;

  agregar(incremento: number) {
    this.contador += incremento;
  }
}
