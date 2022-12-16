import React from 'react';
import ReactDOM from 'react-dom/client';
import Stopwatch from './stopwatch';

const element = <Stopwatch />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
