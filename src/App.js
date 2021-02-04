import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';

const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Set the text state');
  }, []);

  return (
    <Fragment>
      <Header text={text} />
      <p>Test P</p>
    </Fragment>
  );
};

export default App;
