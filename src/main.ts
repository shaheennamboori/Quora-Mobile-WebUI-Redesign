import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
