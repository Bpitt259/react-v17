import { useStoreState, useStoreActions } from 'easy-peasy';

const Cart = () => {
  const cart = useStoreState((state) => state.cart);
  const cartTotal = useStoreState((state) => state.cartTotal);
  const handleRemoveFromCart = useStoreActions(({ removeFromCart }) => removeFromCart);

  return (
    <div>
      {cart.map((product) => (
        <div>
          <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
            X
          </button>
          <div>{product.name}</div>
        </div>
      ))}
      TOTAL: {cartTotal}
    </div>
  );
};

export default Cart;
