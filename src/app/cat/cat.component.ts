import { Component, Input } from '@angular/core';
import { Pet } from '../../data/pets';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  @Input() pet!: Pet;
}
