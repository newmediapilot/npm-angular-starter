import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { LoadListEffect } from './pages/about/about.resolver';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected title = 'angular-starter';
}
