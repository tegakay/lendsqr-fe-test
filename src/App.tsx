import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import { Login } from './components/Login';
import { Users } from './pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/main'  element={<Users/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
