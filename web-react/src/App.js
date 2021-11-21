import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Fun from './pages/Fun'
import Details from './pages/Details'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/fun" element={<Fun/>}/>
          <Route  path="/anime/:id" element={<Details/>}/>
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
