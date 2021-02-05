import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const List = () => {
  const products = useStoreState((state) => state.products.items);
  const basket = useStoreState((state) => state.basket);
  const handleAddToBasket = useStoreActions(({ addToBasket }) => addToBasket);

  console.log('component', products);
  console.log('basket', basket);

  return (
    <ListContainer>
      {products.map((d) => (
        <button type="button" key={d.id} onClick={() => handleAddToBasket(d)}>
          {d.name} {d.available && 'available'}
        </button>
      ))}
      BASKET
      {basket.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ListContainer>
  );
};

export default List;
