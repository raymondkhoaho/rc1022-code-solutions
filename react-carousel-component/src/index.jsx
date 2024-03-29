import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const img = [
  { id: 0, image: '../images/001.png' },
  { id: 1, image: '../images/004.png' },
  { id: 3, image: '../images/007.png' },
  { id: 4, image: '../images/025.png' },
  { id: 5, image: '../images/039.png' }
];

const element = <Carousel images={img} />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
