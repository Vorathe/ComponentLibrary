import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GiphySearchService {
  private url = 'http://api.giphy.com/v1/gifs/search';

  constructor(private http: Http) {
  }

  search(params) {
    let url = this.url + '?q=' + params + '&api_key=dc6zaTOxFJmzC';
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}

