import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './app/Main';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <div className='App'>
      <CookiesProvider>
        <Main/>
      </CookiesProvider>
    </div>
  )
}

export default App;