import OneProduct from './components/OneProduct';
import Edit from './components/Edit'
import Main from './views/Main'
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>    

      <Routes>
        <Route element = {<Main /> } path="/" default/> 
        <Route element = { <OneProduct /> } path="/:id"/>
        <Route element = { <Edit /> } path = "/edit/:id"/>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
