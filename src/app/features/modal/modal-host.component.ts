import { Component } from '@angular/core';

@Component({
  selector: 'cmp-modal-host',
  templateUrl: 'modal-host.component.html'
})

export class ModalHostComponent {
  showDialog = false;
  showIsolatedDialog = false;
  clickOverlayClose = true;
  clickIsolatedOverlayClose = false;

  constructor() { }
}
