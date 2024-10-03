import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
}
