import { SuperSale } from './superSale';
describe('Super Sale product', () => {
  it('the price should decrease double', () => {
    const superSale = new SuperSale('Super Sale', 4, 30);
    superSale.updatePrice();
    expect(superSale.price).toEqual(28);
    expect(superSale.sellIn).toEqual(3);
  });

  it('the price should be 0 although the result of the discount is negative', () => {
    const superSale = new SuperSale('Super Sale', 4, 1);
    superSale.updatePrice();
    expect(superSale.price).toEqual(0);
    expect(superSale.sellIn).toEqual(3);
  });

});