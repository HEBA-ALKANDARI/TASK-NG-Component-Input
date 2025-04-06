import { Component, Input } from '@angular/core';
import { Pet } from '../../data/pets';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  @Input() pet!: Pet;
}
