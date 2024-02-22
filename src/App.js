import React from 'react';
import StatefulComponent from './StatefulComponent';
import StateUpdateExample from './StateUpdateExample';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div>
      <h1>Stateful Component Example</h1>
      <StatefulComponent />

      <h1>State Update Example</h1>
      <StateUpdateExample />

      <h1>Data Sharing Example</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
