import { Product, FullCoverage, SpecialFullCoverage, MegaCoverage, SuperSale } from './Products';
import { CarInsurance } from './carInsurance';

const carInsurance = new CarInsurance([
  new Product('Medium Coverage', 10, 20),
  new FullCoverage('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverage('Mega Coverage', 0, 80),
  new MegaCoverage('Mega Coverage', -1, 80),
  new SpecialFullCoverage('Special Full Coverage', 15, 20),
  new SpecialFullCoverage('Special Full Coverage', 10, 49),
  new SpecialFullCoverage('Special Full Coverage', 5, 49),
  new SuperSale('Super Sale', 3, 6),
]);

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach((product) => {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  });
  console.log('');
}