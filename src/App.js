
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
function App() {

  function showAlert()
  {
    alert("hello");
  }
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
    </div>
  );
}

export default App;
