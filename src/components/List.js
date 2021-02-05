import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Product from './Product';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const List = () => {
  const products = useStoreState((state) => state.products.items);
  const cart = useStoreState((state) => state.cart);
  const handleAddToCart = useStoreActions(({ addToCart }) => addToCart);

  return (
    <ListContainer>
      {products.map((product) => (
        <Product key={product.id} onClick={() => handleAddToCart(product)} product={product} />
      ))}
      Cart
      {cart.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ListContainer>
  );
};

export default List;
