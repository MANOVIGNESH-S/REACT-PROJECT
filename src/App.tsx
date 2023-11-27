import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './Components/Sign';
import Login from './Components/Login';
import Home from './Components/Home';
import Slidebar from './Components/Slidebar';
import Pills from './Components/Pills';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signin />} />
          <Route path='/slidebar' element={<Slidebar />} />
          <Route path='/pill' element={<Pills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
