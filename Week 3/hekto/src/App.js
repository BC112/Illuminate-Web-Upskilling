import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Promotion from './components/promotion/promotion';
import Products from './components/products/products';
import Feature from './components/feature/feature';

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion />
      <Products />
      <Feature />
    </div>
  );
}

export default App;
