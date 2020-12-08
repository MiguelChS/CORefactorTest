import { Product } from './product';
export class SpecialFullCoverage extends Product {

  private getValueIncrement() {
    if (this.sellIn <= 5) return 3;
    if (this.sellIn <= 10) return 2;
    return 1;
  }

  updatePrice() {
    if (this.sellIn > 0) {
      this.price = this.price + this.getValueIncrement();
      this.price = this.price > 50 ? 50 : this.price;
    } else {
      this.price = 0;
    }
    this.updateSellIn();
  }
}