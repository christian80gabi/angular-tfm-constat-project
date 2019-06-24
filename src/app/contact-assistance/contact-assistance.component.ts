import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Assistance} from '../models/assistance.model';
import {AssistanceService} from '../services/assistance.service';

@Component({
  selector: 'app-contact-assistance',
  templateUrl: './contact-assistance.component.html',
  styleUrls: ['./contact-assistance.component.scss']
})
export class ContactAssistanceComponent implements OnInit {

  assistanceSubscription: Subscription;
  assistances: Assistance[];

  constructor(
    private assistanceService: AssistanceService
  ) { }

  ngOnInit() {
    this.getAssistance();
    console.log('Initialization...');
  }

  getAssistance() {
    this.assistanceSubscription = this.assistanceService.assistanceSubject.subscribe(
      (assist: Assistance[]) => {
        this.assistances = assist;
      }
    );
    this.assistanceService.emitAssistance();
  }

  onSendMyPosition() {
  }

  onCall() {
  }

}
