import { MegaCoverage } from './megaCoverage';
describe('Mega Coverage product', () => {
  it('should not modify any property', () => {
    const megaCoverage = new MegaCoverage('Mega Coverage', 0, 80);
    megaCoverage.updatePrice();
    expect(megaCoverage.price).toEqual(80);
    expect(megaCoverage.sellIn).toEqual(0);
  });
});