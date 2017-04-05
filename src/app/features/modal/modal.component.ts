import {
  Component,
  OnInit,
  Input,
  Output,
  // OnChanges,
  EventEmitter,
  trigger,
  // state,
  style,
  animate,
  transition, keyframes
} from '@angular/core';

@Component({
  selector: 'my-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({
              opacity: '0',
              transform: 'scale3d(.75, .75, .75) translateY(-20%)'
            }),
            style({ opacity: '1', transform: 'scale3d(1, 1, 1) translateY(0)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', transform: 'scale3d(1, 1, 1) translateY(0)' }),
            style({ opacity: '0', transform: 'scale3d(.75, .75, .75) translateY(-20%)' })
          ])
        )
      ])
    ]),
    trigger('overlay', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0' }),
            style({ opacity: '1' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1' }),
            style({ opacity: '0' })
          ])
        )
      ])
    ])
  ]
})

export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closableOverlay: boolean;
  @Input() isolatedModal: boolean;

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  closeViaOverlay() {
    if (this.closableOverlay) {
      this.close();
    } else {
      return false;
    }
  }
}
