import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './reset.css'

// component
import { BemComp } from './components/BemComp'
import { CssModuleComp } from './components/CssModuleComp'
import { StyledComp } from './components/StyledComp'
import { EmotionComp } from './components/EmotionComp'
import { LinariaComp } from './components/LinariaComp'
import { LinariaComp2 } from './components/LinariaComp2'


ReactDOM.render(
  <React.StrictMode>
    <BemComp />
    <CssModuleComp />
    <StyledComp />
    <EmotionComp />
    <LinariaComp />
    <LinariaComp2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
