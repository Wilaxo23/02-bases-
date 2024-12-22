import { CounterComponent } from './counter.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true, // También debe ser standalone
  imports: [], // Aquí importas otros módulos o componentes si es necesario
  templateUrl: './counter.Component.html',
})
export class CounterComponent {
  title = 'angular-bases;';
  counter = 0;

  public increaseBy() {
    this.counter += 1;
  }
}
