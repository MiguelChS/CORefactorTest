import { Product } from './product';
export class SuperSale extends Product {
  updatePrice() {
    this.price = this.price - 2;
    this.price = this.price - 2 < 0 ? 0 : this.price;
    this.updateSellIn();
  }
}