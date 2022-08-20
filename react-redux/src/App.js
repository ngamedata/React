import "./App.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/product/:productId"  component={ProductDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
