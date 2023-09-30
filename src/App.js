import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './common/Navbar/Navbar'
import Footer from './common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
