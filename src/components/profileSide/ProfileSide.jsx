import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import './profileSide.css'
import ProfileCard from '../profileCard/ProfileCard'
import FollowersCard from '../followersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide