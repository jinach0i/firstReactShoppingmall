import './App.css';
import Cart from './routes/Cart';
import Home from './routes/Home';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail' element={<div>상세페이지임</div>}></Route>
        <Route path='/about' element={<div>소개페이지임</div>}/>
        <Route path='/cart' component={<Cart />}/>
        
      </Routes>
    </div>
  );
}

export default App;
