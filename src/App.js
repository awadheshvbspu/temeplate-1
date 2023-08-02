import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';
import Settings from './component/Settings';
import Analytics from './component/Analytics';


function App() {
  return (
    <>
  {/* <Sidenav/> */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product' element={<Product/>} />
    <Route path='/analytics' element={<Analytics/>} />
    <Route path='/settings' element={<Settings/>} />
  </Routes>
    </>
  );
}

export default App;
