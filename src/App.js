import React from 'react';

const ClickComponent = () => {
  const handleClick = (e) => {
    console.log('test m 2 soft reset');
    console.log('test m 2 soft reset');

  };
  return (
    <div>
      <h1>Simple Click Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickComponent;
