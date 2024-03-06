import logo from './logo.svg';
import './App.css';
import { Suspense  } from 'react';
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
import AnnapoornaDonation from './common/DonationPages/AnnapoornaDonate/AnnapoornaDonation.jsx';
import CowSheltersDonation from './common/DonationPages/CowShelters/CowShelters';
import { useContext, useEffect, useState } from 'react';
import {Context} from './index.js'
import axios from 'axios';
import MyAccount from './features/auth/MyAccount/MyAccount.jsx';
import Profile from './features/auth/Profile/Profile.jsx'
import Dharamkosh from './components/Dharamkosh/Dharamkosh';
import DharmadaSeva from './components/DharmadaSeva/DharmadaSeva';
import NaturalDisaster from './components/NaturalDisaster/NaturalDisaster';
import VedicEducation from './components/VedicEducation/VedicEducation';
import Maharajshri from './components/Maharajshri/Maharajshri';
import Archikadidi from './components/ArchikaDidi/Archikadidi';
import SideMenuComp from './common/SideMenuComponent/SideMenuComp';
import OldAgeHome from './components/OldAgeHome/OldAgeHome';
import Mahashivratri from './components/Mahashivratri/Mahashivratri';
import AurJaane from './common/AurJaanePage/AurJaane.jsx';
import AboutVjm from './components/AboutVJM/AboutVjm.jsx';
import VideosComp from './components/VideosComp/VideosComp.jsx';
import ArticlesComp from './components/ArticlesComp/ArticlesComp.jsx';
import QuotesContainer from './components/QuotesContainer/QuotesContainer.jsx';
import SponsorAGirl from './components/SponsorAGirl/SponsorAGirl.jsx';
import Terms from './components/Terms&Conditions/Terms.jsx';
import Contactus from './components/ContactUs/Contactus.jsx';
import PrivacyPolicies from './components/PrivacyPolicies/PrivacyPolicies.jsx';
import FrequentlyAskedQ from './newpagescommoncomp/FrequentyAskedQ/FrequentlyAskedQ.jsx';
import KanyaAtmanirbhal from './components/KanyaAtmanirbhal/KanyaAtmanirbhal.jsx';
import LibraryDonation from './components/LibraryDonation/LibraryDonation.jsx';
import KaushalVikasYojna from './components/KaushalVikasYojna/KaushalVIkasYojna.jsx';
import BirthdayContribution from './components/BirthDayContribution/BirthdayContribution.jsx';
import MiddayMeal from './newpagescommoncomp/MiddayMeal/Middaymeal.jsx';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess.jsx';
import StoriesMore from './newpagescommoncomp/StoriesMore/StoriesMore.jsx';
import Dummy from './components/Dummy/Dummy.jsx';
import Layout from './protectedlayout/Layout.js';
import PersistLogin from './features/auth/PersistLogin.js';

function App() {
  // const {user , setUser , setIsAuthenticated , setloading} = useContext(Context);
  const [refresh , setRefresh] = useState(false);
  const url ="http://localhost:4000";
  let [w , setW] = useState(window.innerWidth)
  //  let width = window.innerWidth;
  function updateSize(){
    return setW(window.innerWidth)

  }

  useEffect(()=>{
    window.addEventListener('resize', updateSize);
    
  },[w])
  // console.log(w)

  // useEffect(()=>{
  //   setloading(true);
  //   axios.get(`${url}/api/v1/me`, {
  //     // withCredentials:true
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
      <Suspense fallback={<h4>Loading...</h4>}>
          {/* { w > 870 ? <Navbar/>: <RenderSideBar/>} */}

          { w > 870 ? <Navbar/>: <SideMenuComp/>}

        </Suspense>
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
          <Route path='/aboutvjm' element={<AboutVjm/>}/>
          <Route path='/oldagehome' element={<OldAgeHome/>}/>
          <Route path='/mahashivratri' element={<Mahashivratri/>}/>

          <Route element={<Login/>} path='login'/>
          <Route element={<Signup/>} path='signup'/>

          {/* //login// */}

          <Route element={<VideosComp/>} path='videos'/>
          <Route element={<ArticlesComp/>} path='articles'/>
          <Route element={<QuotesContainer/>} path='quotes'/>
          <Route element={<PersistLogin/>}>
            <Route path="private" element={<Layout/>}>

              <Route path='myaccount'>
                <Route element={<MyAccount/>} index/>
              </Route>
              <Route path='profile'>
                <Route element={<Profile/>} index/>
              </Route>
              <Route path='volunteer'>
                <Route element={<Volunteer/>} index />  

              </Route>
              <Route path='donation'>
                  <Route element={<Donation/>} index/>

              </Route>

          </Route>
          </Route>
          <Route element={<Dikshit/>} path='diksha'/>
          <Route element={<VJMMembership/>} path='vjm-membership'/>
          <Route element={<Donor/>} path='donor'/>
          <Route element={<BalkalyanDonate/>} path='balkalyan-donation'/>
          <Route element={<DharmadaDonation/>} path='dharmada-donation'/>
          <Route element={<CowSheltersDonation/>} path='cowshelter-donation'/>
          <Route element={<AnnapoornaDonation/>} path='annapoorna-donation'/>

          {/* //Donation// */}
          {/* // aurjaane  */}
          <Route element={<AurJaane/>} path='/more'/>
          <Route element={<StoriesMore/>} path='/storiesmore'/>


          {/* // New Pages  */}
          <Route element={<Terms/>} path='/terms'/>
          <Route element={<FrequentlyAskedQ/>} path='/frequentlyaskedquestions'/>
          <Route element={<PrivacyPolicies/>} path='/privacypolicy'/>

          <Route element={<Contactus/>} path='/contactus'/>
          <Route element={<SponsorAGirl/>} path='/sponsor-a-girl'/> 
          <Route element={<LibraryDonation/>} path='/library-donation'/> 
          <Route element={<MiddayMeal/>} path='/middaymeal'/> 
          <Route element={<KaushalVikasYojna/>} path='/kaushal-vikas-yojna'/> 
          <Route element={<BirthdayContribution/>} path='/birthday-donation'/> 
          <Route element={<KanyaAtmanirbhal/>} path='/kanya'/> 
          
          {/* //payment success// */}
          <Route element={<PaymentSuccess/>} path='/paymentsuccess'/> 
          <Route element={<Dummy/>} path='/dummy'/> 




        </Routes>
        <Footer/>
      </Router>
        <Toaster/>
    </div>
  );
}

export default App;
