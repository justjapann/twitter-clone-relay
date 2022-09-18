import React, { useEffect, useState } from 'react'
import PostsList from './post/PostList'
import SideBar from './sidebar/SideBard'
import RightBar from './rightbar/RightBar'
import CreatePost from '../pages/post/CreatePost'
import '../../styles/Home.css'

const PostList = () => {
  return (
    <div className='container'>
      <div className='container-sidebar'>
        <SideBar />
      </div>

      <div className='container-post'>
        <div>
          <CreatePost />
        </div>
        <div>
          <PostsList />
        </div>
      </div>

      <div>
        <RightBar />
      </div>
    </div>
  )
}

export default PostList
