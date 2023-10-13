import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
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
import CowSheltersDonation from './common/DonationPages/CowShelters/CowShelters';
import { useContext, useEffect, useState } from 'react';
import {Context} from './index.js'
import axios from 'axios';
import MyAccount from './components/MyAccount/MyAccount';
import Profile from './common/Profile/Profile.jsx'
import Dharamkosh from './components/Dharamkosh/Dharamkosh';
import DharmadaSeva from './components/DharmadaSeva/DharmadaSeva';
import NaturalDisaster from './components/NaturalDisaster/NaturalDisaster';
import VedicEducation from './components/VedicEducation/VedicEducation';
import Maharajshri from './components/Maharajshri/Maharajshri';
import Archikadidi from './components/ArchikaDidi/Archikadidi';

function App() {
  const {user , setUser , setIsAuthenticated , setloading} = useContext(Context);
  const [refresh , setRefresh] = useState(false);
  const url ="http://localhost:4000";

  // useEffect(()=>{
  //   setloading(true);
  //   axios.get(`${url}/api/v1/me`, {
  //     withCredentials:true
  //   })
  //   .then(resp=>{
  //     setUser(resp.data.user);
  //     setIsAuthenticated(true);
  //   setloading(false)
  //   })
  //   .catch(
  //     setUser({}),
  //     setIsAuthenticated(false),
  //     setloading(false)
  
  //   )
  // },[refresh])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* //components// */}
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
          <Route path='/dharm-kosh' element={<Dharamkosh/>}/>
          <Route path='/dharmada-seva' element={<DharmadaSeva/>}/>
          <Route path='/disaster-relief' element={<NaturalDisaster/>}/>
          <Route path='/gurukul-vedic-edu' element={<VedicEducation/>}/>
          <Route path='/maharajshri' element={<Maharajshri/>}/>
          <Route path='/didi' element={<Archikadidi/>}/>


          {/* //login// */}
          <Route element={<Login/>} path='login'/>
          <Route element={<Signup/>} path='signup'/>
          <Route element={<MyAccount/>} path='myaccount'/>
          <Route element={<Profile/>} path='profile'/>
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
        <Toaster/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
