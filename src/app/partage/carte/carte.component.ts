import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Music} from "../../model/Music";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() employe: Music | undefined;

  @Output('personDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();


  constructor() {
    //Empty
  }

  delete() {
    this.delete$.emit(this.employe);
  }

  update() {
    this.update$.emit(this.employe);
  }

  parseDate(date:string|undefined) {
    return new Date(Date.parse(date || '')).toDateString();
  }
}
