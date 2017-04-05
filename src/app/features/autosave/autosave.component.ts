import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../shared';
import * as moment from 'moment';

@Component({
  selector: 'cmp-autosave',
  templateUrl: 'autosave.component.html'
})

export class AutoSaveComponent implements OnInit {
  public myForm: FormGroup;
  public submitted = false;
  public events: any[] = [];
  public currentStatus: string;
  public modelCopy: Object;
  public lastSaved: any;
  public timeoutLength = 5000;
  timeoutSave: any;

  @HostBinding('attr.role') role = 'form';
  @HostListener('keyup', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    this.autoSave();
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        postcode: ['']
      })
    });

    // subscribe to form changes
    this.subcribeToFormChanges();
  }

  subcribeToFormChanges() {
    this.modelCopy = this.myForm.value;
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => {
      this.currentStatus = x;
      // console.log('STATUS_CHANGED -> ', this.currentStatus);
    });

    myFormValueChanges$.subscribe(x => {
      this.events.push(x);

      if (this.events.length > 1) {
        this.modelCopy = this.events[this.events.length - 2];
      }

      // console.log('Last form object -> ', this.modelCopy);
      // console.log('Current form object -> ', this.myForm.value);
    });
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    console.log('Form model -> ', model, 'Is the form valid -> ', isValid);
  }

  undo() {
    (<FormGroup>this.myForm).setValue(this.modelCopy, { onlySelf: true });
    this.autoSave();
  }

  autoSave() {
    if (this.timeoutSave) {
      clearTimeout(this.timeoutSave);
    }

    this.timeoutSave = setTimeout(() => {
      this.lastSaved = moment().format('h:mm:ss a');
      console.log('Last saved -> ', this.lastSaved);
    }, this.timeoutLength);
  }
}
