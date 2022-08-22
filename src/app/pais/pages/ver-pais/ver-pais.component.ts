import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!:Country[];

  constructor( 
    private activatedRoute:ActivatedRoute, 
    private paisService   :PaisService
    ) { }

    ngOnInit(): void {


      //con este metodo podemos retornar un observable por medio de otro observable con switchmap
      this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.paisService.getPaisPorAlpha(id)),
        tap(console.log)      
      )
      .subscribe( pais =>{
        this.pais = pais;
      });

      //la funcionalidad es la misma con el código de abajo

    //se aplica el activatedRoute e inyectarlo en el constructor para poder usar las funcionalidades
//de los cambios de la url 
//**************** */

    // this.activatedRoute.params
    // .subscribe( params=> {
    //   console.log( params['id'] );

    //   this.paisService.getPaisPorAlpha(params['id'])
    //   .subscribe(pais=>{
    //     console.log(pais);
          //   });    
          // });
//**************** */
//así imprimimos el objeto completo del país
       

  }

}
