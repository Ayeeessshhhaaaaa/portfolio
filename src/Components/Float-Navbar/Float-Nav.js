import React from 'react'
import './Float-Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiBookAlt} from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { AiFillFolderOpen } from 'react-icons/ai';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const FloatNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const location = useLocation();

  return (
  <nav className='nav'>
  {location.pathname === '/education' ? (
          <>
              <a href='/portfolio' onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><AiOutlineHome/></a>
          </>
  ):(
    <>
            <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineHome/></a>
            <a href='#Services' onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
            <a href='#Skills' onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><MdOutlineDesignServices/></a>
            <a href='#Projects' onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><AiFillFolderOpen/></a>
            <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </>
  )}
  </nav>
  )
}

export default FloatNav