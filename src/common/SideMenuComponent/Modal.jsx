import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
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

// const routes = [

//   {
//     path: "/",
//     name: "Home",
//     icon: <FaHome />,
//   },
//   {
//     path: "/aboutus",
//     name: "About Us",
//     icon: <SiAboutdotme />,
//   },
//   {
//     path: "/services",
//     name: "Services",
//     icon: <MdOutlineMiscellaneousServices />,
//   },
//   {
//     path: "/industries",
//     name: "Industries",
//     icon: <LiaIndustrySolid />,
//   },
//   {
//     path: "/careers",
//     name: "Careers",
//     icon: <AiOutlineCodepenCircle />,
//   },

//   {
//     path: "/letstalk",
//     name: "Lets Talk",
//     icon: <GiTalk />,
//   },
//   // {
//   //   path: "/settings",
//   //   name: "Settings",
//   //   icon: <BiCog />,
//   //   exact: true,
//   //   subRoutes: [
//   //     {
//   //       path: "/settings/profile",
//   //       name: "Profile ",
//   //       icon: <FaUser />,
//   //     },
//   //     {
//   //       path: "/settings/2fa",
//   //       name: "2FA",
//   //       icon: <FaLock />,
//   //     },
//   //     {
//   //       path: "/settings/billing",
//   //       name: "Billing",
//   //       icon: <FaMoneyBill />,
//   //     },
//   //   ],
//   // },  

//   // {
//   //   path: "/saved",
//   //   name: "Saved",
//   //   icon: <AiFillHeart />,
//   // },
// ];

const routes = [

  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/aboutus",
    name: "About ",
    icon: <SiAboutdotme />,
    subRoutes: [
      {
        path: "/maharajshri",
        name: "Maharajshri",
        icon: <FaUser />,
      },
      {
        path: "/didi",
        name: "Didi",
        icon: <FaLock />,
      },
      {
        path: "/aboutus",
        name: "About Us",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/wisdom",
    name: "Wisdom",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    path: "/",
    name: "Events",
    icon: <LiaIndustrySolid />,
    subRoutes: [
          {
            path: "ganeshlakshmi",
            name: "Ganesh Lakshmi ",
            icon: <FaUser />,
          },
          {
            path: "/settings/2fa",
            name: "Guru Purnima",
            icon: <FaLock />,
          },
          {
            path: "/settings/billing",
            name: "MahaShiv Ratri",
            icon: <FaMoneyBill />,
          },
        ],
  },
  {
    path: "/",
    name: "Social Initiatives",
    icon: <AiOutlineCodepenCircle />,
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
    icon: <GiTalk />,
  },

  {
    path: "/",
    name: "Yoga and Meditation",
    icon: <GiTalk />,
  },

  {
    path: "/",
    name: "Centers",
    icon: <GiTalk />,
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
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  // activeClassName="active"
                >
                  {/* <div className="icon">{route.icon}</div> */}
                      <div
                        // variants={showAnimation}
                        // initial="hidden"
                        // animate="show"
                        // exit="hidden"
                        className="link_text"
                        onClick={closeModal}
                      >
                        {route.name}
                      </div>
                    
                </NavLink>
              );
            })}
          </section>
      <FontAwesomeIcon color='#ffff' icon={faClose} onClick={closeModal}/>

    </div>
    </>


  )
}

export default Modal