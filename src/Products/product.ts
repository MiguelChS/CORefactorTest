export class Product {
  name: string;
  sellIn: number;
  price: number;
  constructor(name: string, sellIn: number, price: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updateSellIn() {
    this.sellIn--;
  }

  updatePrice() {
    this.price = this.sellIn <= 0 ? this.price - 2 : this.price - 1;
    this.price = this.price < 0 ? 0 : this.price;
    this.updateSellIn();
  }
}