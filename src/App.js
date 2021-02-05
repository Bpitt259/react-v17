import styled from 'styled-components';
import { StoreProvider, createStore } from 'easy-peasy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import model from './model';
import Header from './components/Header';
import List from './components/List';
import Details from './components/Details';

const store = createStore(model);

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
`;

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppContainer>
        <Router>
          {/* header outside of switch so it doesn't change with inner content */}
          <Header />
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/product/:id" component={Details} />
          </Switch>
        </Router>
      </AppContainer>
    </StoreProvider>
  );
};

export default App;
