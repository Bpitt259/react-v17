/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import { action, computed } from 'easy-peasy';
import products from './products.json';

export default {
  products,
  cart: [],
  itemsInCartCount: computed((state) => Object.values(state.cart).length),

  getProduct: computed((state) => (id) => state.products.items.find((product) => product.id == id)),

  addToCart: action((state, payload) => {
    if (!payload.available) {
      alert('item is not available');
    } else {
      state.cart.push(payload);
    }
  }),
  removeFromCart: action((state, payload) => {
    state.cart = state.cart.filter((product) => product.id !== payload);
  }),
};
