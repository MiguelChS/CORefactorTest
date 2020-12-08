import { Product } from './product';

describe('Product Tests', () => {
  it('the price should be 2 when there is a simple decrease', () => {
    const normalProduct = new Product('Medium Coverage', 2, 3);
    normalProduct.updatePrice();
    expect(normalProduct.price).toEqual(2);
    expect(normalProduct.sellIn).toEqual(1);
  });
  it('the price should be 0 when there is a double decrease', () => {
    const normalProduct = new Product('Medium Coverage', 0, 2);
    normalProduct.updatePrice();
    expect(normalProduct.price).toEqual(0);
    expect(normalProduct.sellIn).toEqual(-1);
  });
  it('the price should be 0 although the result of the discount is negative', () => {
    const normalProduct = new Product('Medium Coverage', 0, 1);
    normalProduct.updatePrice();
    expect(normalProduct.price).toEqual(0);
    expect(normalProduct.sellIn).toEqual(-1);
  });
});
