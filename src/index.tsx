import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as D from './data'

const childrend = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
  </div>
))

const rootVisualDom = <div>{childrend}</div>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    rootVisualDom
);

