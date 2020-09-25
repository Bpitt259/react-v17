import React, { useState, useEffect } from 'react';
import Header, { Header2 } from './components/Header';

const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Set the text state');
  }, []);

  const renderHeader = () => {
    return (
      <React.Fragment>
        <Header text={text} />
        <Header2 />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {renderHeader()}
      <p>Test P</p>
    </React.Fragment>
  );
};

export default App;
