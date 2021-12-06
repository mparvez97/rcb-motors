import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Review from './components/pages/Review';
import Cars from './components/pages/Cars';
import Calculator from './components/pages/Calculator';

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Cars" element={<Cars/>} />
            <Route exact path="/Review" element={<Review/>} />
            <Route exact path="/Calculator" element={<Calculator/>} />
            <Route exact path="/Features" element={<Features/>} />
            <Route exact path="/Features/:id" element={<Features/>} />
          </Routes>
          
        </div>
      </Router>
    );
  }

export default App;
