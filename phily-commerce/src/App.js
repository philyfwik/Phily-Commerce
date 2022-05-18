import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/navbar/navbar.component';
import Authentication from './Pages/authentication/authentication.component';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route exact index element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;