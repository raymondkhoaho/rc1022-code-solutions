import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(prop) {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const button = <CustomButton />;
root.render(button);
