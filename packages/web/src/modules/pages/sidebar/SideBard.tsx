/* eslint-disable camelcase */
import React, { useState } from 'react'
import '../../../styles/SideBar.css'
import { GoHome } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import ModalLogin from './ModalLogin'

const SideBar = () => {
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
            <IoMdNotificationsOutline className='icon' />
            <a href='#'>Notifications</a>
          </li>
          <li>
            <AiOutlineMail className='icon' />
            <a href='#'>Messages</a>
          </li>
          <li>
            <BsFillPersonFill className='icon' />
            <a href='#'>Profile</a>
          </li>
        </ul>

        <div className='container-button'>
          <button className='button'>Tweetar</button>
        </div>

        <div>
          <ModalLogin />
        </div>
      </div>
    </div>
  )
}

export default SideBar
