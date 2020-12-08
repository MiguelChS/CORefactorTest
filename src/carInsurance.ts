import { Product } from './Products';

export class CarInsurance {
  products: Product[];
  constructor(products: Product[]) {
    this.products = products;
  }
  updatePrice(): Product[] {
    this.products.forEach((product) => {
      product.updatePrice();
    })
    return this.products;
  }
}