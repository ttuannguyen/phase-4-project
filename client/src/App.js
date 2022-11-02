// import './App.css';
import AddForm from './AddForm';
import Home from './Home';
import ItemsList from './ItemsList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <Home />
      <Navbar />
      <ItemsList />
      <AddForm />

    </div>
  );
}

export default App;
