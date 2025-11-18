import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home";
import { Notfound } from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='*' element={<Notfound></Notfound>}> </Route>
      </Routes>
    
    </BrowserRouter>
  );
};



export default App;



