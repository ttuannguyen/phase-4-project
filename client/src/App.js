// import './App.css';
import Auth from './Components/Auth';
import VisitAddForm from './Components/VisitAddForm';
import Home from './Components/Home';
import ItemCard from './Components/ItemCard';
import ItemsContainer from './Components/ItemsContainer';
import LogIn from './Components/LogIn';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      <Auth />
      <LogIn />
      <Navbar />
      <ItemsContainer />
      <ItemCard />
      <VisitAddForm />
    </div>
  );
}

export default App;
