import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const element = <Carousel />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
