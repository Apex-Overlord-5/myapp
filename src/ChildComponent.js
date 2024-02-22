// // ParentComponent.js
// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const dataToSend = 'Hello from Parent!';

//   return <ChildComponent data={dataToSend} />;
// };

// export default ParentComponent;

// // ChildComponent.js
// import React from 'react';

// const ChildComponent = (props) => {
//   return <p>Data received from parent: {props.data}</p>;
// };

// export default ChildComponent;


// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [receivedData, setReceivedData] = useState('');

  const handleDataFromChild = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <p>Data received from child: {receivedData}</p>
      <ChildComponent onDataReceived={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;

