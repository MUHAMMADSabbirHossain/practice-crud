// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Routes>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/updateproduct/:id" element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>

    </div>
  );
}

export default App;
