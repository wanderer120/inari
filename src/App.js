import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Review from "./Components/Review"
import Landing from './Components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders/:orderId/reviews" element={<Review/>} exact />
        <Route path="/landing" element={<Landing/>} exact />
        <Route path="/" element={<Landing/>} exact />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
