import { SpecialFullCoverage } from './specialFullCoverage';

describe('Special Full Coverage product', () => {
  it('the price should be 4 when there is a simple increase', () => {
    const specialFullCoverage = new SpecialFullCoverage('Special Full Coverage', 12, 3);
    specialFullCoverage.updatePrice();
    expect(specialFullCoverage.price).toEqual(4);
    expect(specialFullCoverage.sellIn).toEqual(11);
  });

  it('the price should increase double when there are 10 days left to sell', () => {
    const specialFullCoverage = new SpecialFullCoverage('Special Full Coverage', 10, 3);
    specialFullCoverage.updatePrice();
    expect(specialFullCoverage.price).toEqual(5);
    expect(specialFullCoverage.sellIn).toEqual(9);
  });

  it('the price should increase three times when there are 5 days left to sell', () => {
    const specialFullCoverage = new SpecialFullCoverage('Special Full Coverage', 5, 3);
    specialFullCoverage.updatePrice();
    expect(specialFullCoverage.price).toEqual(6);
    expect(specialFullCoverage.sellIn).toEqual(4);
  });

  it('the price should be 0 when there are not more days', () => {
    const specialFullCoverage = new SpecialFullCoverage('Special Full Coverage', 0, 45);
    specialFullCoverage.updatePrice();
    expect(specialFullCoverage.price).toEqual(0);
    expect(specialFullCoverage.sellIn).toEqual(-1);
  });

  it('the price should not increase more than 50', () => {
    const specialFullCoverage = new SpecialFullCoverage('Special Full Coverage', 4, 49);
    specialFullCoverage.updatePrice();
    expect(specialFullCoverage.price).toEqual(50);
    expect(specialFullCoverage.sellIn).toEqual(3);
  });
});