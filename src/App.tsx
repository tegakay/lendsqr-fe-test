import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/' element={<Navbar/>}/>
        <Route path='/main'  element={<Main/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
