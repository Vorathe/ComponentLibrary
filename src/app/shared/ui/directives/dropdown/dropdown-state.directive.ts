import { Directive, ElementRef, OnDestroy, Host, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[dirDropdownState]',
  exportAs: 'dropdownState'
})
export class DropdownStateDirective implements OnDestroy {

  private openedByFocus = false;
  private closeDropdownOnOutsideClick: (event: Event) => void;

  constructor(@Host() public dropdown: DropdownDirective,
              private elementRef: ElementRef) {
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event: MouseEvent) {
      _this.closeIfInClosableZone(event);
    };
  }

  // Unused for now
  toggle() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.dropdown.isOpened() || this.dropdown.isDisabled()) { return; }

    this.dropdown.open();
    document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
  }

  close() {
    if (!this.dropdown.isOpened()) { return; }

    this.dropdown.close();
    document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
  }

  @HostListener('click')
  toggleDropdown() {
    if (this.dropdown.dropdownToggle && this.openedByFocus) {
      this.openedByFocus = false;
      return;
    }

    if (this.dropdown.isOpened() && this.dropdown.dropdownToggle) {
      this.close();
    } else {
      this.open();
    }
  }

  @HostListener('focus')
  onFocus() {
    if (!this.dropdown.dropdownToggle) { return; }

    this.openedByFocus = true;
    this.dropdown.open();
    document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    if (!this.dropdown.dropdownToggle) { return; }

    if (event.relatedTarget && event.relatedTarget !== this.elementRef.nativeElement) {

      this.dropdown.close();
      document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
  }

  private closeIfInClosableZone(event: Event) {
    if (event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
  }

}
