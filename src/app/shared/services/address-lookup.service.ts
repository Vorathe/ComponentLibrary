import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class AddressService {
  private addressFindUrl = 'https://api.craftyclicks.co.uk/address/1.1/find';
  private addressDetailsUrl = 'https://api.craftyclicks.co.uk/address/1.1/retrieve';

  constructor (private http: Http) {}

  findAddress() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body: Object = {
      key: '655d3-06278-979e5-01ee8',
      query: 'H2N 1M9',
      country: 'CA'
    };

    return this.http.post(this.addressFindUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));

  }

  getAddressDetails() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body: Object = {
      key: '655d3-06278-979e5-01ee8',
      country: 'CA',
      id: 6223027
    };


    return this.http.post(this.addressDetailsUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
