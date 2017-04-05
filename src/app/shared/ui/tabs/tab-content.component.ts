import { Component, Input, trigger, transition, animate, keyframes, style } from '@angular/core';

@Component({
  selector: 'my-tab-content',
  template: `
      <div *ngIf="active" [@fade]>
        <ng-content></ng-content>
      </div>
      
  `,
  animations: [
    trigger('fade', [
      transition('void => *', [
        animate(200,
          keyframes([
            style({ opacity: '0', height: '0', transform: 'translateY(-200%)' }),
            style({ opacity: '0', height: '0', transform: 'translateY(20px)' }),
            style({ opacity: '1', height: '*', transform: 'translateY(0)' })
          ])
        )
      ]),
      transition('* => void', [
        animate(200,
          keyframes([
            style({ opacity: '1', height: '*' }),
            style({ opacity: '0', height: '0' }),
            style({ opacity: '0', height: '0' }),
            style({ opacity: '0', height: '0' })
          ])
        )
      ])
    ])
  ]
})
export class TabContentComponent {
  @Input() title: string;
  @Input() active = false;
}
