import { Product } from './product';
export class FullCoverage extends Product {
  updatePrice() {
    this.price = this.sellIn <= 0 ? this.price + 2 : this.price + 1;
    this.price = this.price > 50 ? 50 : this.price;
    this.updateSellIn();
  }
}
