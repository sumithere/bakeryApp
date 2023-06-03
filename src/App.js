import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cart  from './components/paths/Cart';
import { HomePage } from './components/paths/HomePage';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/home" element={<HomePage></HomePage>}>
          </Route>
        <Route path="/cart" element={<Cart></Cart>}>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
