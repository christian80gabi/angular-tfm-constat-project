import { Injectable } from '@angular/core';
import {Assistance} from '../models/assistance.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  assistances: Assistance[] = [
    new Assistance(1, 'Tunisia Assistance', 72895639, 1),
    new Assistance(1, 'Africa Assistance', 92895639, 1)
  ];
  assistanceSubject = new Subject<Assistance[]>();

  constructor() { }

  emitAssistance() {
    this.assistanceSubject.next(this.assistances.slice());
  }

  addAssistance(assist: Assistance) {
    this.assistances.push(assist);
    this.emitAssistance();
    console.log('Assistance Added');
  }
}
