import React from 'react'
import './posts.css'
import { PostsData } from '../../data/postData'
import Post from '../post/Post'
const Posts = () => {
  return (
    <div className="Posts">
        {
            PostsData.map((post,id)=>{
                return(
                    <Post data={post} key={id}/>
                )
            })
        }
    </div>
  )
}

export default Posts