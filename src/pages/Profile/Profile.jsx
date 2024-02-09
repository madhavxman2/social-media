import React from 'react'
import './profile.css'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import PostSide from '../../components/postSide/PostSide'
import ProfileCard from '../../components/profileCard/ProfileCard'
import RightSide from '../../components/rightSide/RightSide'
const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className="profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile