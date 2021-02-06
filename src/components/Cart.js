import { useStoreState, useStoreActions } from 'easy-peasy';

const Cart = () => {
  const cart = useStoreState((state) => state.cart);
  const handleRemoveFromCart = useStoreActions(({ removeFromCart }) => removeFromCart);

  return (
    <div>
      CART:
      {cart.map((product) => (
        <div>
          <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
            X
          </button>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
