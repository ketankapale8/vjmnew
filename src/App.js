import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './common/Navbar/Navbar'
import Footer from './common/Footer/Footer';
import GaneshLakshmi from './components/GaneshLakshmi/GaneshLakshmi';
import ManaliMeditation from './components/ManaliMeditation/ManaliMeditation';
import RishikeshMeditation from './components/RishikeshMeditation/RishikeshMeditation';
import NewLifeMeditation from './components/NewLifeMeditation/NewLifeMeditation';
import AnnapoornaYojna from './components/AnnapoornaYojna/AnnapoornaYojna';
import GuruPurnima from './components/GuruPurnima/GuruPurnima';
import Navprabhat from './components/NavPrabhat/Navprabhat';
import Balkalyaan from './components/BalKalyan/Balkalyan';
import Gauseva from './components/GauSeva/GauSeva';

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
          <Route path='/newlifemeditation' element={<NewLifeMeditation/>}/>
          <Route path='/annapoornayojna' element={<AnnapoornaYojna/>}/>
          <Route path='/gurupurnima' element={<GuruPurnima/>}/>
          <Route path='/navprabhat' element={<Navprabhat/>}/>
          <Route path='/balkalyaan' element={<Balkalyaan/>}/>
          <Route path='/gauseva' element={<Gauseva/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
