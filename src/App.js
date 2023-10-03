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

import Login from './common/Login/Login';
import Signup from './common/Signup/Signup';
import Dikshit from './common/DonationPages/Dikshit/Dikshit';
import Volunteer from './common/DonationPages/Volunteer/Volunteer';

import VJMMembership from './common/DonationPages/VJMMembership/VjmMembership';
import Donor from './common/DonationPages/Donor/Donor';
import Donation from './common/DonationPages/Donation/Donation';
import BalkalyanDonate from './common/DonationPages/BalkalyanDonate/BalkalyanDonate';
import DharmadaDonation from './common/DonationPages/DharmadaDonate/DharamadaDonation';
import AnnapoornaDonation from './common/DonationPages/DharmadaDonate/DharamadaDonation';
import CowSheltersDonation from './common/CowShelters/CowShelters';

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
          {/* //login// */}
          <Route element={<Login/>} path='login'/>
          <Route element={<Signup/>} path='signup'/>
          {/* //Donation// */}
          <Route element={<Dikshit/>} path='diksha'/>
          <Route element={<Volunteer/>} path='volunteer'/>
          <Route element={<VJMMembership/>} path='vjm-membership'/>
          <Route element={<Donor/>} path='donor'/>
          <Route element={<Donation/>} path='donation'/>
          <Route element={<BalkalyanDonate/>} path='balkalyan-donation'/>
          <Route element={<DharmadaDonation/>} path='dharmada-donation'/>
          <Route element={<CowSheltersDonation/>} path='cowshelter-donation'/>
          <Route element={<AnnapoornaDonation/>} path='annapoorna-donation'/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
