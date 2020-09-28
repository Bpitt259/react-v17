import React, { useState } from 'react';
import styled from 'styled-components';
import Gear from './components/Gear/Gear';
import Synth from './components/Gear/Synth';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  const [loadModules, setLoadModules] = useState(false);

  return (
    <AppContainer>
      <div>
        <button id="load-modules" onClick={() => setLoadModules(true)} type="button">
          Load modules
        </button>
      </div>
      {loadModules && (
        <React.Fragment>
          <Gear />
          <Synth />
        </React.Fragment>
      )}
    </AppContainer>
  );
};

export default App;
