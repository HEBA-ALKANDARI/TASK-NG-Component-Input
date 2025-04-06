import { Component } from '@angular/core';
import { pets } from '../data/pets';
import { CatComponent } from "./cat/cat.component";
import { DogComponent } from "./dog/dog.component";
import { RabbitComponent } from "./rabbit/rabbit.component";
import { OtherComponent } from "./other/other.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatComponent, DogComponent, RabbitComponent, OtherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
