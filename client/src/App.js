// import './App.css';
// import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import VisitAddForm from './components/VisitAddForm';
import Home from './components/Home';
import ItemCard from './components/ItemCard';
import ItemsContainer from './components/ItemsContainer';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
// import { UserProvider } from './context/user';

function App() {

  return (
    <div className="App">
      <Home />
      <Auth />
      <LogIn />
      {/* <UserProvider>
        <LogIn />
      </UserProvider> */}
      <Navbar />
      <ItemsContainer />
      <ItemCard />
      <VisitAddForm />
    </div>
  );
}

export default App;
