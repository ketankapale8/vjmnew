import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {SiAboutdotme} from 'react-icons/si';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {LiaIndustrySolid} from 'react-icons/lia'
import {AiOutlineCodepenCircle} from 'react-icons/ai';
import {GiTalk} from 'react-icons/gi'

import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './sidebar.scss';
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

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "100px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container" style={{position: 'relative'}}>
        <motion.div
          animate={{
            width: isOpen ? "100px" : "45px",

            transition: {
              
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >

                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  {/* <div className="icon">{route.icon}</div> */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;