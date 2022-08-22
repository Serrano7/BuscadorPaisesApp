import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //debounce time es aconsejable cuando se consumen servicios http a apis
  //se emite el evento cuando la persona deja de escribir en el input para utilizar debouncer
  //neesitamos el ngOnInit
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  //switch al placeholder 
  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';


  //emite el valor despues de 300 milesimas de segundo obtenemos nuestrosresultados
  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

}
