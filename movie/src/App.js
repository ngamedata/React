import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
// 471503a3
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
