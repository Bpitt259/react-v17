import React, { Suspense, useState } from 'react';
import styled from 'styled-components';

const Albums = React.lazy(() => import('./components/Albums'));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-self: center;
  flex: 1 1 200px;
  margin: 50px auto;
`;

const App = () => {
  const [loadComponents, setLoadComponents] = useState(false);

  return (
    <AppContainer>
      <HeaderContainer>
        <button type="button" onClick={() => setLoadComponents(true)}>
          load artists
        </button>
      </HeaderContainer>

      {loadComponents && (
        <Suspense fallback={<div>Loading Albums...</div>}>
          <Albums />
        </Suspense>
      )}
    </AppContainer>
  );
};

export default App;
