import { Component } from '@angular/core';

@Component({
  selector: 'my-tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {
  public tabs: Array<any> = [
    {
      title: 'Such excuse',
      content: 'Very ipsum such dolor amet wow many minim much ipsum many eu very sed such occaecat very aute very aliqua such ipsum very id much many ipsum. So ut very aliquip much lorem such elit many ullamco.'
    },
    {
      title: 'So beta',
      content: 'Many beta many develop many padding, very filler such border such layer much develop so layer. Concern so content very margin such.'
    },
    {
      title: 'Very develop',
      content: 'Much beta so css very spans much develop, such divs such layer many develop much spans much divs. Wow so layer amaze very excuse such content much divs.'
    }
  ];
  constructor() {}
}
