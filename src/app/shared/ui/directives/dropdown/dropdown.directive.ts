import { Directive, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[dirDropdown]',
  exportAs: 'dropdown'
})
export class DropdownDirective {

  @Input() dropdownToggle = true;
  @Input() dropdownDisabled = false;

  @Output()
  onOpen = new EventEmitter();
  @Output()
  onClose = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  open() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.add('dropdown--open');
    this.onOpen.emit(undefined);
  }

  close() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.remove('dropdown--open');
    this.onClose.emit(undefined);
  }

  isOpened() {
    const element: HTMLElement = this.elementRef.nativeElement;
    return element.classList.contains('dropdown--open');
  }

  isDisabled() {
    return this.dropdownDisabled;
  }

}
