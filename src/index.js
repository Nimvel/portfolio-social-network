import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path='/*' element={<App state={store.getState()} dispatch={ store.dispatch.bind(store) } />} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerender(store.getState());

store._subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
