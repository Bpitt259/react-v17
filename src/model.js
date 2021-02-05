import { action } from 'easy-peasy';
import products from './products.json';

export default {
  products,
  basket: [],
  addToBasket: action((state, payload) => {
    if (!payload.available) {
      alert('item is not available');
    } else {
      state.basket.push(payload);
    }
  }),
};
