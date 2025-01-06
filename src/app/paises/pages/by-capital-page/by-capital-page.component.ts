import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent,CommonModule],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public paises: Pais[] = [];

  constructor( private paisesService: PaisesService){}


  busquedaByCapital( term: string):void{
    console.log('desde byCapital');
    this.paisesService.searchCapital(term)
    .subscribe( paises => {
      this.paises = paises
    });

  }

}
