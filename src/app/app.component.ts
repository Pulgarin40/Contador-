import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  title = 'Contador';
  counter: number = 0;
  inputValue: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  calculateSqrt() {
    if (this.counter >= 0) {
      this.counter = Math.sqrt(this.counter);
    } else {
      alert('No se puede calcular la raíz cuadrada de un número negativo');
    }
  }

  updateCounter(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.counter = parsedValue;
    }
  }
}
