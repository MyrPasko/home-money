import {Component, OnInit, OnDestroy} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'pmr-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency())
      .subscribe((data: [Bill, any]) => {
        this.currency = data[1];
        this.bill = data[0];
        this.isLoaded = true;
        console.log(this.bill, this.currency);
      });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();   // чтоб не жрало память
    if (this.sub2) {
      this.sub2.unsubscribe();   // чтоб не жрало память
    }
  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }
}
