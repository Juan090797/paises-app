import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'paises-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais-table.component.html',
  styleUrl: './pais-table.component.css'
})
export class PaisTableComponent {

  @Input()
  public paises: Pais[] = [];
}
