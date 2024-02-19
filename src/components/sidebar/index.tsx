import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// import { useRef } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDatabase } from 'react-icons/hi';
// * React icons
import { IoIosArrowBack } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { RiBuilding3Line } from 'react-icons/ri';
import { SlSettings } from 'react-icons/sl';
import { TbReportAnalytics } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';

import SubMenu from './SubMenu';

const Sidebar = () => {
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  // const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: 'build',
      icon: RiBuilding3Line,
      menus: ['auth', 'app settings', 'stroage', 'hosting'],
    },
    {
      name: 'analytics',
      icon: TbReportAnalytics,
      menus: ['dashboard', 'realtime', 'events'],
    },
  ];
  const navLinks = [
    { to: '/', text: 'All Apps', icon: <AiOutlineAppstore size={23} className="min-w-max" /> },
    { to: '/About', text: 'About', icon: <BsPerson size={23} className="min-w-max" /> },
    { to: '/stroage', text: 'Storage', icon: <HiOutlineDatabase size={23} className="min-w-max" /> },
  ];
  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? 'block' : 'hidden'} `}></div>
      <motion.div
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen ">
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src="https://img.icons8.com/color/512/firebase.png" width={45} alt="" />
          <span className="text-xl whitespace-pre">Protegix</span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[100%] h-[100%]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className="link">
                  {link.icon}
                  {link.text}
                </NavLink>
              </li>
            ))}

            {(open || isTabletMid) && (
              <div className="py-5 border-y border-slate-300 ">
                <small className="inline-block pl-3 mb-2 text-slate-500">Product categories</small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={'/settings'} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {/* {open && (
            <div className="z-50 flex-1 w-full my-auto text-sm font-medium whitespace-pre max-h-48 ">
              <div className="flex items-center justify-between p-4 border-y border-slate-300">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">Upgrade</p>
              </div>
            </div>
          )} */}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute z-50 hidden cursor-pointer w-fit h-fit md:block right-2 bottom-3">
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
