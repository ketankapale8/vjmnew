import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './common/Navbar/Navbar'
import Footer from './common/Footer/Footer';
import GaneshLakshmi from './components/GaneshLakshmi/GaneshLakshmi';
import ManaliMeditation from './components/ManaliMeditation/ManaliMeditation';
import RishikeshMeditation from './components/RishikeshMeditation/RishikeshMeditation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ganeshlakshmi' element={<GaneshLakshmi/>}/>
          <Route path='/manalimeditation' element={<ManaliMeditation/>}/>
          <Route path='/rishikeshmeditation' element={<RishikeshMeditation/>}/>



        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
