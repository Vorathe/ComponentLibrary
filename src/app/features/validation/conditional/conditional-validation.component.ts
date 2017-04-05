import {Component, OnInit, trigger, transition, animate, keyframes, style} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ConditionalForm } from '../../../shared';

@Component({
  selector: 'my-conditional-validation',
  templateUrl: 'conditional-validation.component.html',
  animations: [
    trigger('slide', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0', maxHeight: '0' }),
            style({ opacity: '1', maxHeight: '200px' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', maxHeight: '200px' }),
            style({ opacity: '0', maxHeight: '0' })
          ])
        )
      ])
    ])
  ]
})

export class ConditionalValidationComponent implements OnInit {
  public conditionalForm: FormGroup;
  public submitted: boolean = false;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.conditionalForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      conditional: this._fb.group({
        purple: ['yes']
      })
    });

    this.subcribeToFormChanges();
  }

  subcribeToFormChanges() {
    const myFormValueChanges$ = this.conditionalForm.valueChanges;

    let fieldExists = (<FormGroup>(<FormGroup>this.conditionalForm).controls['conditional'])
      .contains('comment');

    myFormValueChanges$.subscribe(x => {
      fieldExists = (<FormGroup>(<FormGroup>this.conditionalForm).controls['conditional'])
        .contains('comment');

      if (x.conditional.purple === 'no' && !fieldExists) {
        // Add
        (<FormGroup>(<FormGroup>this.conditionalForm).controls['conditional'])
          .addControl('comment', new FormControl('', Validators.required));
      } else if (x.conditional.purple === 'yes' && fieldExists) {
        // Remove
        (<FormGroup>(<FormGroup>this.conditionalForm).controls['conditional'])
          .removeControl('comment');
      }
    });
  }

  save(model: ConditionalForm, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}
