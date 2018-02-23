import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { BeerModel } from './beer.model';

@Injectable()
export class BeerService {
  constructor(public http: Http) {}

  getData(): Promise<BeerModel> {
    return this.http.get('http://hknapptest.azurewebsites.net/api/products/app')
     .toPromise()
     .then(response => response.json() as BeerModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
