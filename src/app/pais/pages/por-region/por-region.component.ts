import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent{

  regiones: string[] = [
    'Africa', 
    'Americas', 
    'Asia', 
    'Europe', 
    'Oceania',
];
  regionActiva: string = '';
  paises: Country[] = [];


//NECESITO inyectar el servicio para poder utilizarlo en un componente
  constructor(private paisService: PaisService) { }


  //clase evaluativa de CSS por medio de una función
  getClaseCSS (region: string):string{
    return (region === this.regionActiva) 
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
  }

  activarRegion ( region: string){

    //para que no vuelva a recargar paises si estoy en una region ya

    if ( region === this.regionActiva ) { return }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe(paises=>{
      // console.log(paises)
      this.paises = paises
    });
  }

}
