import styled from 'styled-components';
import { StoreProvider, createStore } from 'easy-peasy';

import model from './model';
import List from './components/List';

const store = createStore(model);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppContainer>
        <p>Test P</p>

        <List />
      </AppContainer>
    </StoreProvider>
  );
};

export default App;
