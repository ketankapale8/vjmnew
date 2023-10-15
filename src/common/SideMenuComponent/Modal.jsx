import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {AiOutlineCaretDown} from 'react-icons/ai'

import {SiAboutdotme} from 'react-icons/si';

import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {LiaIndustrySolid} from 'react-icons/lia'
import {AiOutlineCodepenCircle} from 'react-icons/ai';
import {GiTalk} from 'react-icons/gi'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import './sidemenu.scss';

const routes = [
  
  {
    path: "/",
    name: "Home",
    // icon: <FaHome />,
  },
  {
    path: "/aboutus",
    name: "About ",
    icon: <AiOutlineCaretDown />,
    subRoutes: [
      {
        path: "/maharajshri",
        name: "Maharajshri",
        icon: <FaUser />,
      },
      {
        path: "/didi",
        name: "Didi",
        // icon: <FaLock />,
      },
      {
        path: "/aboutus",
        name: "About Us",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/wisdom",
    name: "Wisdom",
    // icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "/",
    name: "Events",
    icon: <AiOutlineCaretDown />,
    subRoutes: [
      {
        path: "ganeshlakshmi",
        name: "Ganesh Lakshmi ",
        // icon: <FaUser />,
      },
      {
        path: "gurupurnima",
        name: "Guru Purnima",
        // icon: <FaLock />,
      },
      {
        path: "mahashivratri",
        name: "MahaShivRatri",
        // icon: <FaMoneyBill />,
      },
      {
        path: "navprabhat",
        name: "Nav Prabhat",
        // icon: <FaMoneyBill />,
      },

      {
        path: "manalimeditation",
        name: "Manali Meditation",
        // icon: <FaMoneyBill />,
      },

      {
        path: "rishikeshmeditation",
        name: "Rishikesh Meditation Retreat",
        // icon: <FaMoneyBill />,
      },

      {
        path: "newlifemeditation",
        name: "Newlife Meditation",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/",
    name: "Social Initiatives",
    icon: <AiOutlineCaretDown />,
    subRoutes: [
      {
        path: "annapoornayojna",
        name: "Annapoorna Yojna ",
        // icon: <FaUser />,
      },
      {
        path: "balkalyaan",
        name: "Balkalyan Yojna",
        // icon: <FaLock />,
      },
      {
        path: "gauseva",
        name: "Cow Shelters",
        // icon: <FaMoneyBill />,
      },
      {
        path: "navprabhat",
        name: "Nav Prabhat",
        // icon: <FaMoneyBill />,
      },

      {
        path: "dharm-kosh",
        name: "Dharm Kosh",
        // icon: <FaMoneyBill />,
      },

      {
        path: "dharmada-seva",
        name: " Dharmada Seva",
        // icon: <FaMoneyBill />,
      },

      {
        path: "gurukul-vedic-edu",
        name: " Gurukul Vedic Education",
        // icon: <FaMoneyBill />,
      },

      {
        path: "healthcare",
        name: " Healthcare",
        // icon: <FaMoneyBill />,
      },

      {
        path: "disaster-relief",
        name: " Natural Disaster Relief",
        // icon: <FaMoneyBill />,
      },

      {
        path: "oldagehome",
        name: " Old Age Home",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  // {
    //   path: "/file-manager",
    //   name: "File Manager",
    //   icon: <AiTwotoneFileExclamation />,
    //   subRoutes: [
      //     {
        //       path: "/settings/profile",
        //       name: "Profile ",
        //       icon: <FaUser />,
        //     },
        //     {
          //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
    //       path: "/settings/billing",
    //       name: "Billing",
    //       icon: <FaMoneyBill />,
    //     },
    //   ],
    // },
    {
      path: "/news",
      name: "News",
      // icon: <GiTalk />,
    },
    
    {
      path: "/",
      name: "Yoga and Meditation",
      // icon: <GiTalk />,
    },
    
    {
      path: "/",
      name: "Centers",
      // icon: <GiTalk />,
    },
    // {
      //   path: "/settings",
      //   name: "Settings",
      //   icon: <BiCog />,
      //   exact: true,
      //   subRoutes: [
        //     {
          //       path: "/settings/profile",
          //       name: "Profile ",
          //       icon: <FaUser />,
          //     },
          //     {
            //       path: "/settings/2fa",
            //       name: "2FA",
            //       icon: <FaLock />,
            //     },
            //     {
              //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },  
  
  // {
    //   path: "/saved",
    //   name: "Saved",
    //   icon: <AiFillHeart />,
    // },
  ];
  
  
  function Modal({closeModal}) {
    const [currentSubRoute , setCurrentSubRoute] = useState(null);
    const [show , setshow] = useState(false);

    const openSubMenu = () =>{
      if(show == true){
        setshow(false)
      }else{
        setshow(true)
      }

    }
    
    useEffect(()=>{
      document.body.style.overflowY = "hidden";
      return () =>{
        document.body.style.overflowY = "scroll";
      }
    },[])
    return (
    <>
    
    <div className="blurBg" onClick={closeModal}></div>
    <div className="modalContainer" >
      <section className="routes">
            {routes.map((route, index) => {
              

              return (
                <>

                      <div
                        // variants={showAnimation}
                        // initial="hidden"
                        // animate="show"
                        // exit="hidden"
                        className="link_text"
                        // onClick={closeModal}
                      >
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  onClick={closeModal}
                  
                  // activeClassName="active"
                >
                        {route.name}
                </NavLink>
                        <div className="icon" onClick={() => openSubMenu()} >{route.icon}</div> 
                        </div>
                        {show && (
                          <>
                            {route?.subRoutes?.map((subRoute , i) => (
                              <NavLink to={subRoute.path} className="link">
                              <div onClick={closeModal} className="link_text" style={{fontSize:'0.4rem' ,textDecoration:'none'}}>{subRoute.name}</div>
                            </NavLink>
                            ))
            } 
                          
                          </>
                        )}
                      
                
                  
                </>
              );
            })}
          </section>
      <FontAwesomeIcon color='#ffff' icon={faClose} onClick={closeModal}/>

    </div>
    </>


  )
}

export default Modal