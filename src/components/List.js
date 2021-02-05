import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const List = () => {
  const data = useStoreState((state) => state.data.items);

  console.log('component', data);

  return (
    <ListContainer>
      {data.map((d) => (
        <div key={d.id}>{d.id}</div>
      ))}
    </ListContainer>
  );
};

export default List;
