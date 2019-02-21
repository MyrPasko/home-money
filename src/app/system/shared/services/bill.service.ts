import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getBill() {
    return this.get('bill');
  }

  getCurrency(base: string = 'UAH') {
    // const apiKey = '8ce5b254f053a28c8d9a78be2464ee2b';
    // return this.http.get(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=${base}`);

    return this.http.get(`http://localhost:3000/courses?base=${base}`)
      .map((curr) => {
      console.log(curr);
        return curr[0] ? curr[0] : undefined;
      });
  }
}
