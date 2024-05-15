import React from 'react';

const ClickComponent = () => {
  const handleClick = (e) => {
    console.log('Button clicked!>>>>>>>>>>>>>>>>>>>>>>>>');
  };

  return (
    <div>
      <h1>Simple Click Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickComponent;
