import { Component, Input } from '@angular/core';
import { Pet } from '../../data/pets';

@Component({
  selector: 'app-rabbit',
  standalone: true,
  imports: [],
  templateUrl: './rabbit.component.html',
  styleUrl: './rabbit.component.css'
})
export class RabbitComponent {
  @Input() pet!: Pet;
}
