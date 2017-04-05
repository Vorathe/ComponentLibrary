import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabContentComponent } from './tab-content.component';

@Component({
  selector: 'cmp-tab-list',
  template: `
    <ul class="tab-list">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        {{tab.title}}
      </li>
    </ul>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `
})
export class TabListComponent implements AfterContentInit {

  @ContentChildren(TabContentComponent) tabs: QueryList<TabContentComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    console.log(this.tabs);
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(currentTab: TabContentComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(prevTab => prevTab.active = false);

    // activate the tab the user has clicked on.
    currentTab.active = true;
  }

}
