import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pmr-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit{
  @Input() currency: any;
  currencies: string[] = ['USD', 'EUR', 'RUB'];

ngOnInit() {
  console.log(this.currency);
  console.log(this.currencies);
}



}
