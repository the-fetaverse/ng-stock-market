import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent {
  // Values:
  public stock: Stock = new Stock('Test Stock Company', 'TSC', 85, 80);

  // Add favorite function:
  toggleFavorite(event: any) {
    console.log(event);
    this.stock.favorite = !this.stock.favorite;
  }
}
