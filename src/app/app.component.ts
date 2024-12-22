import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  standalone: true,
  imports: [CounterComponent],
})
export class AppComponent {}
