import { FullCoverage } from './fullCoverage';

describe('Full Coverage Product test', () => {
  it('the price should be 4 when there is a simple increase', () => {
    const fullCoverage = new FullCoverage('Full Coverage', 2, 3);
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toEqual(4);
    expect(fullCoverage.sellIn).toEqual(1);
  });
  it('the price should be 5 when there is a double increase when date has passed', () => {
    const fullCoverage = new FullCoverage('Full Coverage', 0, 3);
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toEqual(5);
    expect(fullCoverage.sellIn).toEqual(-1);
  });

  it('the price should be 50 although the result of the increase is greater than 50', () => {
    const fullCoverage = new FullCoverage('Full Coverage', 0, 49);
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toEqual(50);
    expect(fullCoverage.sellIn).toEqual(-1);
  })
});