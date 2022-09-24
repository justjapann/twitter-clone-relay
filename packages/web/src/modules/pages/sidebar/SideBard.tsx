/* eslint-disable camelcase */
import React, { useState } from 'react'
import '../../../styles/SideBar.css'
import { GoHome } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillPersonFill, BsFillPeopleFill, BsBookmark } from 'react-icons/bs'
import { BiHash } from 'react-icons/bi'
import { CgMoreO } from 'react-icons/cg'
import ModalLogin from './ModalLogin'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/useAuth'

const SideBar = () => {
  const navigate = useNavigate()
  const { signout } = useAuth()

  const handleLogout = () => {
    signout(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <div className='container'>
      <div className='container-menu'>
        <AiOutlineTwitter className='logo' />
        <ul>
          <li>
            <GoHome className='icon' />
            <a href='#'>Home</a>
          </li>
          <li>
            <BiHash className='icon' />
            <a href='#'>Explorer</a>
          </li>
          <li>
            <BsFillPeopleFill className='icon' />
            <a href='#'>Communities</a>
          </li>
          <li>
            <IoMdNotificationsOutline className='icon' />
            <a href='#'>Notifications</a>
          </li>
          <li>
            <AiOutlineMail className='icon' />
            <a href='#'>Messages</a>
          </li>
          <li>
            <BsBookmark className='icon' />
            <a href='#'>Bookmaks</a>
          </li>
          <li>
            <BsFillPersonFill className='icon' />
            <a href='#'>Profile</a>
          </li>
          <li>
            <CgMoreO className='icon' />
            <a href='#'>More</a>
          </li>
        </ul>

        <div className='container-button'>
          <button className='button'>Tweetar</button>
        </div>

        <div>
          <h3 className='signout' onClick={handleLogout}>
            Sign Out
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SideBar
