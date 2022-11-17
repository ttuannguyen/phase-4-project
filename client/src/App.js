// import './App.css';
import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import VisitAddForm from './components/VisitAddForm';
import Home from './components/Home';
import ItemCard from './components/ItemCard';
import ItemsContainer from './components/ItemsContainer';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
// import { UserProvider } from './context/user';

function App() {

  const [secretSpots, setSecretSpots] = useState([])

  useEffect(() => {
    fetch('/secret_spots')
    .then(res => res.json())
    .then(json => console.log(json))
  }, [])

  const handlePost = () => {
    fetch('/secret_spots', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }
  


  return (
    <div className="App">
      <Home />
      <LogIn />
      {/* <UserProvider>
        <LogIn />
      </UserProvider> */}
      <Auth />
      <Navbar />
      <ItemsContainer />
      <ItemCard />
      <VisitAddForm />
    </div>
  );
}

export default App;
