// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import './menubar.css'

function MenuBar() {
  return (
    <>
        <nav>
        <div>
        <img href="/" id='logo' src={logo}/>
        </div>

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><a href="/">Home</a></li>
                <li>
                    <label for="drop-1" class="toggle">About </label>
                    <a href="#">About</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                      
                        <li>
                          <Link to="/maharajshri" style={{textDecoration:'none'}}>
                              MaharajShri
                          </Link>
                        </li>
                        <li>
                          <Link to="/didi" style={{textDecoration:'none'}}>
                          Didi
                          </Link>
                        </li>
                        <li>
                          <Link to="/aboutvjm" style={{textDecoration:'none'}}>
                          AboutVJM
                          </Link>
                          </li>
                    </ul> 

                </li>
                <li>
                    <label for="drop-1" class="toggle">Wisdom </label>
                    <a href="/">Wisdom</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                          <li>
                          <Link to="https://open.spotify.com/show/4FAloEoRFnd0rXixlpHBbr" style={{textDecoration:'none'}}>
                          Podcasts
                          </Link>
                          </li>
                          
                        </li>
                        <li>
                          <Link to="/videos" style={{textDecoration:'none'}}>
                          Videos
                          </Link>
                          </li>
                        <li>
                          <Link to="/articles" style={{textDecoration:'none'}}>
                          Articles
                          </Link>
                        </li>
                        <li>
                          <Link to="/quotes" style={{textDecoration:'none'}}>
                        Quotes
                          </Link>
                        </li>

                    </ul> 

                </li>
                <li>
                    <label for="drop-1" class="toggle">Events </label>
                    <a href="/">Events</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="/ganeshlakshmi" style={{textDecoration:'none'}}>
                        GaneshLakshmi
                          </Link>
                        </li>
                        <li>
                        <Link to="/gurupurnima" style={{textDecoration:'none'}}>
                        Guru Purnima
                          </Link>
                        
                        </li>
                        <li>
                          <Link to="/mahashivratri" style={{textDecoration:'none'}}>
                          MahaShivratri 
                          </Link>
                        </li>
                        <li>
                          <Link to="/navprabhat" style={{textDecoration:'none'}}>
                          Nav Prabhat
                          </Link>
                        </li>
                        <li>
                          <Link to="/manalimeditation" style={{textDecoration:'none'}}>
                          Manali Meditation Retreat
                          </Link>
                        </li>
                        <li>
                          <Link to="/rishikeshmeditation" style={{textDecoration:'none'}}>
                          Rishikesh Meditation Retreat
                          </Link>
                        </li>

                        <li>
                          <Link to="/newlifemeditation" style={{textDecoration:'none'}}>
                          New Life Meditation
                          </Link>
                        </li>

                    </ul> 

                </li>
                <li>
                    <label for="drop-1" class="toggle">Social Initiatives +</label>
                    <a href="/">Social Initiatives</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="/annapoornayojna" style={{textDecoration:'none'}}>
                        Annapoorna Yojna
                          </Link>
                        </li>
                        <li>
                        <Link to="/balkalyan" style={{textDecoration:'none'}}>
                        Balkalyan Yojna
                          </Link>
                        </li>
                        <li>
                        
                        <Link to="/gauseva" style={{textDecoration:'none'}}>
                        Cow Shelters
                          </Link>
                        </li>
                        <li>
                        <Link to="/dharm-kosh" style={{textDecoration:'none'}}>
                        Dharm Kosh
                          </Link>
                        </li>
                        <li>
                        <Link to="/dharmada-seva" style={{textDecoration:'none'}}>
                        Dharmada Seva
                          </Link>
                        
                        </li>
                        <li>
                        <Link to="/gurukul-vedic-edu" style={{textDecoration:'none'}}>
                        Gurukul Vedic Education
                          </Link>
                        
                        </li>
                        <li>
                        <Link to="/healthcare" style={{textDecoration:'none'}}>
                        Healthcare
                          </Link>
                        
                        </li>
                        <li>
                        <Link to="/disaster-relief" style={{textDecoration:'none'}}>
                        Natural Disaster Relief
                          </Link>

                        </li>
                        <li>
                        <Link to="/oldagehome" style={{textDecoration:'none'}}>
                        Old Age Home
                          </Link>
                        </li>
                        <li>
                        <Link to="/skill-development" style={{textDecoration:'none'}}>
                        Skill Development
                          </Link>
                        </li>
                    </ul> 

                </li>

              

                <li>
                <label for="drop-1" class="toggle">Yug Rishi Pooja Center </label>
                    <a href="/">Yug Rishi Pooja Center</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="https://www.youtube.com/watch?v=DfW3nkZlyDI" style={{textDecoration:'none'}}>
                        Daily Aarti
                          </Link>
                        
                        </li>
                        {/* <li>
                        <Link to="/monthly-events" style={{textDecoration:'none'}}>
                        Monthly Events
                          </Link></li> */}
                        
                    </ul> 
                </li>
                {/* <li>
                <label for="drop-1" class="toggle">Yoga and Meditation </label>
                    <a href="/">Yoga and Meditation</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="http://www.vjmyogaschool.org/" style={{textDecoration:'none'}}>
                        Yoga Courses
                          </Link>
                        </li>

                        <li>
                        <Link to="https://www.youtube.com/watch?v=DfW3nkZlyDI" style={{textDecoration:'none'}}>
                        Daily Aarti
                          </Link>
                        
                        </li>
                        

                    </ul> 
                </li> */}
                <li>
                <label for="drop-1" class="toggle">News +</label>
                    <a href="/">News</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="/pressrelease" style={{textDecoration:'none'}}>
                        Press Release
                          </Link>
                        </li>
                        <li>
                        <Link to="/media" style={{textDecoration:'none'}}>
                        Media
                          </Link>
                        </li>
                        {/* <li>
                        <Link to="/collaborative-programs" style={{textDecoration:'none'}}>
                        Collaborative Programs
                          </Link>
                        </li>
                        <li>
                        <Link to="/interviews" style={{textDecoration:'none'}}>
                        Interviews
                          </Link>
                        </li> */}
                        
                    </ul> 
                </li>
                <li>
                <label for="drop-1" class="toggle">Be A Member +</label>
                    <a href="/">Yoga and Meditation</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li>
                        <Link to="/diksha" style={{textDecoration:'none'}}>
                        Diksha
                          </Link></li>
                        <li>
                        <Link to="/volunteer" style={{textDecoration:'none'}}>
                        Volunteer
                          </Link>
                        </li>
                        <li>
                        <Link to="/vjm-membership" style={{textDecoration:'none'}}>
                        VJM Membership
                          </Link></li>
                        <li>
                        <Link to="/donor" style={{textDecoration:'none'}}>
                        Donor
                          </Link></li>
                          <li>
                        <Link to="http://www.vjmyogaschool.org/" style={{textDecoration:'none'}}>
                        Yoga Courses
                          </Link>
                        </li>

                        <li>
                        <Link to="https://www.youtube.com/watch?v=DfW3nkZlyDI" style={{textDecoration:'none'}}>
                        Daily Aarti
                          </Link>
                        
                        </li>

                        

                        

                    </ul> 
                </li>
                <li>
                <label for="drop" class="toggle">Centers </label>
                    <a href="/">Centers</a>
                    
                </li>
                
               
            </ul>
        </nav>


        

    </>
  );
}

export default MenuBar;