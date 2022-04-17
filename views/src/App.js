import './App.css';
import Header from './components/Header';
import Cafes from './Pages/Cafes';
import Restaurants from './Pages/Restaurants'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Cafes/>
      <Restaurants/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
