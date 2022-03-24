import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  operacion: string = '';
  error: boolean = false;

  numClick(n: number) {
    this.operacion += n;
  }

  opClick(op: string) {
    switch (op) {
      case '=':
        this.calcIgual();
        break;
      case 'c':
        this.calcClear();
        break;
      default:
        this.operacion += op;
        break;
    }
  }

  private calcIgual() {
    this.operacion = eval(this.operacion);
  }

  private calcClear() {
    this.operacion = '';
  }
}
