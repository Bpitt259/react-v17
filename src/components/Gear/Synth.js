import React, { useState, useEffect } from 'react';

const Synth = ({ synths = [] }) => {
  const [mySynths, setSynths] = useState([]);

  useEffect(() => {
    setSynths(synths);
    return () => null;
  }, []);

  return <div>Synths Loaded: {mySynths}</div>;
};

export default Synth;
