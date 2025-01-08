import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { PaisTableComponent } from '../../components/pais-table/pais-table.component';
import { Pais } from '../../interfaces/pais';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, PaisTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public paises: Pais[] = [];

      constructor( private paisesService: PaisesService){}


      busquedaByRegion( term: string):void{
        console.log('desde busquedaByRegion');
        this.paisesService.searchRegion(term)
        .subscribe( paises => {
          this.paises = paises
        });

      }

}
