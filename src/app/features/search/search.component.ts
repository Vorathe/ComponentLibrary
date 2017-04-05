import {Component, HostListener, HostBinding} from '@angular/core';
import { GiphySearchService } from '../../shared';

@Component({
  selector: 'my-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent {
  public params: string = '';
  public gifs: Array<any> = [];
  public timeoutLength: number = 1000;
  timeoutSearch: any;

  @HostBinding('attr.role') role = 'form';

  @HostListener('keyup')
  handleKeyboardEvent() {
    this.autoSearch();
  }
  constructor(private giphy: GiphySearchService) {}

  search(params) {
    console.log(params);
    this.giphy.search(params)
      .subscribe(
        results => {
          this.gifs = results.data;
          console.log(this.gifs);
        },
        err => {
          console.log(err);
        });
  }

  autoSearch() {
    if (this.timeoutSearch) {
      clearTimeout(this.timeoutSearch);
    }

    this.timeoutSearch = setTimeout(() => {
      this.search(this.params);
    }, this.timeoutLength);
  }
}
