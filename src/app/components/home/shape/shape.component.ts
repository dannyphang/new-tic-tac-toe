import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ShapeComponent {
  @Input() shape: string = "circle";
  @Input() index: number = 0;

  constructor() { }
}
