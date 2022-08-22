import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

termino: string = '';
hayError: boolean = false;
paises: Country[]=[];

//para utilizar el servicio Pais debemos inyectarlo en el componente por medio de un constructor

constructor (private paisService:PaisService){}

buscar(termino:string){
  this.hayError = false;
  this.termino = termino;

  //para que el observable funcione debemos utilizar el .subscribe()
  //el servicio subscribe tiene un next y luego void como imprime las siguientes respuestas para manejar errores
  this.paisService.buscarPais(termino)
  .subscribe( (respuestaPaises)=>{  
    console.log(respuestaPaises);
    this.paises = respuestaPaises;

  }, (err) => {
    this.hayError = true;  
    this.paises = [];
  }
   );
}

sugerencias(termino:string){
  this.hayError = false;
  //TODO: crear sugerencias
}

}
