import { CarInsurance } from './carInsurance';
import { Product } from './Products/product';
jest.mock('./Products/product');

describe('CarInsurance test', () => {
  it('should call updatePrice methods to update product prices', () => {
    const carInsurance = new CarInsurance([
      new Product("producto generic", 10, 20)
    ]);
    carInsurance.updatePrice();
    const instancia = (Product as jest.Mock).mock.instances[0];
    expect(instancia.updatePrice).toHaveBeenCalled();
  });
});
