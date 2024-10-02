import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule para usar ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],  // Agregar FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corregir a styleUrls (plural)
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  counter: number = 0;  // Inicializamos el contador en 0
  inputValue: number = 0;  // Valor por defecto del input

  // Método para incrementar el contador
  increment() {
    this.counter++;
  }

  // Método para decrementar el contador
  decrement() {
    this.counter--;
  }

  // Método para actualizar el contador con el valor ingresado
  updateCounter(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.counter = parsedValue;
    }
  }
}
