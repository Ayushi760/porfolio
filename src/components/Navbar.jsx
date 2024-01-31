import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = ({ handleThemeSwitch, theme }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  console.log(theme)
  return (
    <nav className="w-full flex items-center p-5 fixed top-0 z-20 dark:bg-primary bg-white">
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          <p className='dark:text-white text-[#804dee] text-[18px] font-bold cursor-pointer flex'>Ayushi Saxena</p>
        </Link>
        <div className='flex gap-9'>
          <label class="switch" for="switch">
            <input id="switch" type="checkbox" class="circle" value={theme} onChange={(e) => handleThemeSwitch(e.target.value)} />
            <svg
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
              class="moon svg"
            >
              !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License
              - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
              <path
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              ></path>
            </svg>
            <div class="sun svg">
              <span class="dot"></span>
            </div>
          </label>
       
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "dark:text-white text-[#804dee]" : "dark:text-secondary text-[#804dee]"} hover:dark:text-white text-[#804dee] text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        </div>
        <div className='sm:hidden flex justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer dark:invert-0 invert-[.25]' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 dark:bg-[#121626] bg-[#e2e4ea] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar