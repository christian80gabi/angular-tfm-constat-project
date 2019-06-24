import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Witness} from '../../models/witness.model';
import {ReportService} from '../../services/report.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-constat-five',
  templateUrl: './constat-five.component.html',
  styleUrls: ['./constat-five.component.scss']
})
export class ConstatFiveComponent implements OnInit, OnDestroy {

  witnessForm: FormGroup;
  witnesses: Witness[];
  witnessSubscription: Subscription;
  id_report: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private constatService: ReportService
  ) {}

  ngOnInit() {
    this.onGetWitnesses();

    this.iniForm();

    console.log('Initialization...');
  }

  ngOnDestroy(): void {
    this.witnessSubscription.unsubscribe();
    console.log('on Destroying');
  }

  iniForm() {
    this.witnessForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: '',
      tel: ''
    });
  }

  onAddWitness() {
    const formValue = this.witnessForm.value;
    console.log(formValue);
    const newWitness = new Witness(
      0,
      formValue['name'],
      formValue['address'],
      formValue['tel'],
      null
    );
    this.constatService.addWitness(newWitness);
  }

  onGetWitnesses() {
    this.witnessSubscription = this.constatService.witnessSubject.subscribe(
      (witness: Witness[]) => {
        this.witnesses = witness;
      }
    );
    this.constatService.emitWitness();
    console.log('Getting Witnesses...');
  }

  onNext() {
    this.constatService.setWitnesses(this.id_report);
    console.log('Witnesses are setting as ', this.witnesses);
    this.router.navigate(['/constat', 'six']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }
}
