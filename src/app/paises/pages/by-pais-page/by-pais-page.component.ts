import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisesService } from '../../services/paises.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { PaisTableComponent } from '../../components/pais-table/pais-table.component';

@Component({
  selector: 'app-by-pais-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, PaisTableComponent],
  templateUrl: './by-pais-page.component.html',
  styleUrl: './by-pais-page.component.css'
})
export class ByPaisPageComponent {
  public paises: Pais[] = [];

    constructor( private paisesService: PaisesService){}


    busquedaByPais( term: string):void{
      console.log('desde busquedaByPais');
      this.paisesService.searchPais(term)
      .subscribe( paises => {
        this.paises = paises
      });

    }

}
