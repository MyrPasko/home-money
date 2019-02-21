import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'pmr-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() {
  }

  ngOnInit() {
    const {rates} = this.currency;
    console.log(this.currency);
    this.dollar = this.bill.value * rates['USD'];
    this.euro = this.bill.value * rates['EUR'];
  }

}
