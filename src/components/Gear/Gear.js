import React, { useState, useEffect } from 'react';

const Gear = () => {
  const [gear, setGear] = useState([]);

  const loadGear = () => {
    return ['Roland', 'Korg', 'Access', 'Elektron'];
  };

  useEffect(() => {
    setGear(loadGear());
    return () => null;
  }, []);

  return <div>Gear Loaded: {gear}</div>;
};

export default Gear;
