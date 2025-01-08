import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { switchMap } from 'rxjs';
import { Pais } from '../../interfaces/pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pais-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais-page.component.html',
  styleUrl: './pais-page.component.css'
})
export class PaisPageComponent implements OnInit{

  public pais?: Pais;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisesService: PaisesService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activedRoute.params
        .pipe(
          switchMap( ({id}) => this.paisesService.searchPaisByAlphaCode(id)),
        )
        .subscribe(pais =>{

          if(!pais){
            return this.router.navigateByUrl('');
          }
          return this.pais = pais;
        })


    // this.activedRoute.params
    //     .subscribe( ({id}) =>{
    //       this.paisesService.searchPaisByAlphaCode(id)
    //           .subscribe( pais =>
    //               console.log({pais})
    //           )
    //     })

  }

}
