import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background: lightgreen;
  cursor: pointer;
`;

const Product = ({ product, onClick }) => {
  const { id, name } = product;
  return (
    <ProductContainer onClick={onClick}>
      {id} {name}
      <Link to={`/product/${id}`}>Detail</Link>
    </ProductContainer>
  );
};

export default Product;
