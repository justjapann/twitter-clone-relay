import React, { useEffect, useState } from 'react'
import SideBar from '../sidebar/SideBard'
import RightBar from '../rightbar/RightBar'
import { User } from './User'
import '../../../styles/Profile.css'

const Profile = () => {
  return (
    <div className='container'>
      <div className='container-sidebar'>
        <SideBar />
      </div>

      <div className='container-post'>
        <User />
      </div>

      <div>
        <RightBar />
      </div>
    </div>
  )
}

export default Profile
