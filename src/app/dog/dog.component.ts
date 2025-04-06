import { Component, Input } from '@angular/core';
import { Pet } from '../../data/pets';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  @Input() pet!: Pet
}
