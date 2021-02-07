/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import { action, computed } from 'easy-peasy';
import products from './products.json';

const removeProduct = (data, id) => {
  return data.filter((product) => product.id !== id);
};

export default {
  products,
  cart: [],

  // GETTERS
  itemsInCartCount: computed((state) => Object.keys(state.cart).length),
  cartTotal: computed(({ cart }) => cart.reduce((res, curr) => res + parseInt(curr.total, 10), 0)),
  getProduct: computed((state) => (id) => state.products.items.find((product) => product.id == id)),

  // ACTIONS
  updateProduct: action((state, payload) => {
    const index = state.cart.findIndex((product) => product.id === payload.id);
    state.cart[index] = payload;
  }),

  addToCart: action((state, payload) => {
    if (!payload.available) {
      alert('item is not available');
    }
    // we need this to keep track of the quantity on each product
    const cartProduct = state.cart.find((p) => p.id === payload.id);
    const productExists = state.cart.some((p) => p.id === payload.id);

    if (productExists) {
      const updatedProduct = {
        ...payload,
        quantity: (cartProduct.quantity += 1),
        total: payload.price * cartProduct.quantity,
      };
      // replace the product with the new quantity.
      const index = state.cart.findIndex((p) => p.id === payload.id);
      state.cart[index] = updatedProduct;
    } else {
      // save the first instance of the product in the cart
      state.cart.push({ ...payload, quantity: 1, total: payload.price });
    }
  }),

  // decrement the quantity, if 0 -> remove item
  decrementQuantity: action((state, payload) => {
    const cartProduct = state.cart.find((p) => p.id === payload);
    if (cartProduct.quantity === 0) {
      state.cart = removeProduct(state.cart, payload);
    }
    cartProduct.quantity -= 1;
  }),

  incrementQuantity: action((state, payload) => {
    const cartProduct = state.cart.find((p) => p.id === payload);
    // set max here for options
    // if (cartProduct.options max quantity === cartProduct.quantity) {
    //   return null;
    // }
    cartProduct.quantity += 1;
  }),

  // remove item by ID entirely
  removeFromCart: action((state, payload) => {
    state.cart = removeProduct(state.cart, payload);
  }),
};
