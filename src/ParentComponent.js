// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  const sendDataToParent = () => {
    props.onDataReceived('Hello from Child!');
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
