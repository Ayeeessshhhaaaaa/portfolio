import React from 'react'
import './Float-Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiBookAlt} from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri'
import { AiFillFolderOpen } from 'react-icons/ai'
import { useState } from 'react'


const FloatNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
  <nav className='nav'>
    <a href='/portfolio#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineHome/></a>
    <a href='/portfolio#Services' onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
    <a href='/portfolio#Skills' onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><MdOutlineDesignServices/></a>
    <a href='/portfolio#Projects' onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><AiFillFolderOpen/></a>
    <a href='/education' onClick={() => setActiveNav('/education')} className={activeNav === '/education' ? 'active' : ''}><BiBookAlt/></a>
    <a href='/portfolio#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  </nav>
  )
}

export default FloatNav