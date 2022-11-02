// import './App.css';
import AddForm from './AddForm';
import Auth from './Auth';
import Home from './Home';
import ItemCard from './ItemCard';
import ItemsContainer from './ItemsContainer';
import LogIn from './LogIn';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      <Auth />
      <LogIn />
      <Navbar />
      <ItemsContainer />
      <ItemCard />
      <AddForm />
    </div>
  );
}

export default App;
