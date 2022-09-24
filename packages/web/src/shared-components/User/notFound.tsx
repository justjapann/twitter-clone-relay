import React from 'react'
import userNotFound from './usernotfound.jpeg'

export default function NotFound() {
  return (
    <>
      <div className='user-header-info'>
        <div className='user-profile-cover'>
          <img className='user-image-cover' src={userNotFound}></img>
        </div>
        <div className='flex justify-between'>
          <img className='user-avatar-profile' src={userNotFound}></img>
        </div>
        <div className='user-info-profile'>
          <p className='text-white text-5xl text-center font-bold'>Essa conta não existe.</p>
        </div>
      </div>
      <div className='profile-tweets-column'></div>
    </>
  )
}
