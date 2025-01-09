import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'paises-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pais-table.component.html',
  styleUrl: './pais-table.component.css'
})
export class PaisTableComponent {

  @Input()
  public paises: Pais[] = [];
}
