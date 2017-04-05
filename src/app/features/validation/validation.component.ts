import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LongForm } from '../../shared';

@Component({
  selector: 'cmp-validation',
  templateUrl: 'validation.component.html'
})

export class ValidationComponent implements OnInit {
  public longForm: FormGroup;
  public submitted = false;
  public emailRegex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
  // private zipRegex: string = '/(^\d{5}$)|(^\d{5}-\d{4}$)/';

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.longForm = this._fb.group({
      firstname: ['', <any>Validators.required],
      lastname: ['', <any>Validators.required],
      email: ['', [<any>Validators.required, <any>Validators.pattern(this.emailRegex)]],
      address: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
    });
  }

  // onFocus(event, name) {
  //   console.log(event, name);
  //   (<FormGroup>this.longForm).controls[name].markAsUntouched(true);
  // }
  //
  onBlur(event, name, len, dirty) {
    console.log(event, name, len);
    if (len === 0 && !dirty) {
      (<FormGroup>this.longForm).controls[name].markAsUntouched(true);
    }
  }

  save(model: LongForm, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}
