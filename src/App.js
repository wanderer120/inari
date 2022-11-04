import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";

import Review from "./Components/Review"
import Landing from './Components/Landing';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/orders/:orderId/reviews" element={<Review/>} exact />
        <Route path="/landing" element={<Landing/>} exact />
        <Route path="/" element={<Landing/>} exact />
      </Routes>
      <div>version:05.11.2022.1</div>
    </HashRouter>
    
  );
}

export default App;
