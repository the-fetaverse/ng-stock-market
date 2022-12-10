import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  // Values:
  public stocks: Array<Stock> = [];
  public stockClasses: any;

  // onInit:
  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ];
    // let diff = this.stock.price / this.stock.previousPrice - 1;
    // let largeChange = Math.abs(diff) > 0.01;
    // this.stockClasses = {
    //   positive: this.stock.isPositiveChange(),
    //   negative: !this.stock.isPositiveChange(),
    //   'large-change': largeChange,
    //   'small-change': !largeChange,
    // };
  }

  // Add favorite function:
  toggleFavorite(index: number) {
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  // Track stocks by stock code:
  trackStockByCode(index: number, stock: Stock): string {
    return stock.code;
  }
}
