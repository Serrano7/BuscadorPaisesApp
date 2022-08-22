import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //termino de api REST COUNTRIES

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  //tipado por medio de una interface  https://app.quicktype.io/ convierte un json y crear interfaces

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }
 

    //este pipe puede funcionar para capturar el error e imprimir el arreglo vació o en este caso con un HolaMundo
    // .pipe(
    //   catchError( err => of(['Hola Mundo!']))
    // )
 

  //api para capital city
  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  //api para codigo alpha
 
  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }


//la petición de REGION utiliza un filtro ?fields que lo brinda la API de países, dicho filtro
//permite que la respuesta sea más rápida y liviana.

  buscarRegion( region: string ): Observable<Country[]> {
  const url = `${ this.apiUrl }/region/${ region }?fields=name,cca2,flags,population`;
    return this.http.get<Country[]>( url );
}
}

