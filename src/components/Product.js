import styled from 'styled-components';

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
    </ProductContainer>
  );
};

export default Product;
