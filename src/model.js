/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import { action, computed } from 'easy-peasy';
import products from './products.json';

export default {
  products,
  cart: [],

  // GETTERS
  itemsInCartCount: computed((state) => Object.values(state.cart).length),
  cartTotal: computed(({ cart }) => cart.reduce((res, curr) => res + parseInt(curr.price, 10), 0)),

  getProduct: computed((state) => (id) => state.products.items.find((product) => product.id == id)),
  productQuantity: computed((state) => (id) => state.cart.filter((p) => p.id == id).length),

  // ACTIONS
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
