import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import Product from './Product';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const List = () => {
  const products = useStoreState((state) => state.products.items);

  return (
    <ListContainer>
      {products.map((product) => (
        <Link to={`product/${product.id}`}>
          <Product key={product.id} product={product} />
        </Link>
      ))}
    </ListContainer>
  );
};

export default List;
