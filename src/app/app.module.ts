import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    CounterComponent, // Aquí se importan los componentes standalone
  ],
  providers: [],
  bootstrap: [AppComponent], // El componente raíz de la aplicación
})
export class AppModule {}
