import { useStoreState, useStoreActions } from 'easy-peasy';

const Cart = () => {
  const cart = useStoreState((state) => state.cart);
  const cartTotal = useStoreState((state) => state.cartTotal);
  const handleRemoveFromCart = useStoreActions(({ removeFromCart }) => removeFromCart);

  const handleChangeQuantity = (e, productId) => {
    console.log(e.target.value, productId);
  };

  return (
    <div>
      {cart.map((product) => {
        const quantity = cart.filter((p) => p.id == product.id).length;
        return (
          <div key={product.id} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>{product.name}</div>
            <div>
              quantity:
              <input
                style={{ width: '25px', marginLeft: '20px' }}
                type="number"
                id="quantity"
                name="quantity"
                step="1"
                value={quantity}
                min="0"
                max="10"
                onChange={(e) => handleChangeQuantity(e, product.id)}
              />
            </div>
            <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
              remove
            </button>
          </div>
        );
      })}
      TOTAL: {cartTotal}
    </div>
  );
};

export default Cart;
