import { useStoreState, useStoreActions } from 'easy-peasy';

const Cart = () => {
  const cart = useStoreState((state) => state.cart);
  const cartTotal = useStoreState((state) => state.cartTotal);

  const handleIncrementQuantity = useStoreActions(({ incrementQuantity }) => incrementQuantity);
  const handleDecrementQuantity = useStoreActions(({ decrementQuantity }) => decrementQuantity);
  const handleRemoveFromCart = useStoreActions(({ removeFromCart }) => removeFromCart);
  console.log(cart);

  return (
    <div>
      {cart.map((product) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div key={product.id} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div>{product.name}</div>
              <div>price: ${product.price}</div>
              <div>
                quantity:
                <input
                  style={{ width: '40px', marginLeft: '20px' }}
                  id="quantity"
                  name="quantity"
                  value={product.quantity || 0}
                />
              </div>
              <button type="button" onClick={() => handleDecrementQuantity(product.id)}>
                -
              </button>
              <button type="button" onClick={() => handleIncrementQuantity(product.id)}>
                +
              </button>
              <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
                remove
              </button>
              <div> product total: {product.total} </div>
            </div>
          </div>
        );
      })}
      TOTAL: {cartTotal}
    </div>
  );
};

export default Cart;
