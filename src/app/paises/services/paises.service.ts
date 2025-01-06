import { Pais } from './../interfaces/pais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient ) { }

  searchPaisByAlphaCode( code: string ): Observable<Pais | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Pais[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  searchCapital( term: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Pais[]>( url )
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchPais( term: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Pais[]>( url )
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchRegion( region: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Pais[]>( url )
      .pipe(
        catchError( () => of([]) )
      );
  }


}
