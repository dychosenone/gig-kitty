import VerticalDots from './assets/dots-icon.svg';
import LikeIcon from './assets/like-icon.svg';

import './post.css'
import { useState } from 'react';
import { Users } from '../../dummyData';

export default function Post( { post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-top-content">
          <div className="post-top-info">
            <div className="post-top-left-info">
              <div className="post-top-left-header">
                <img 
                  src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                  alt="pfp"
                  id="post-pfp"
                />
                <div className="post-top-left-header-text">
                <p className="post-top-username">
                  {Users.filter((u) => u.id === post?.userId)[0].username}
                </p>
                <p className="post-top-dateposted">{post.date}</p>
                </div>
              </div>
            </div>
            <div className="post-top-icon">
              <img 
                src={VerticalDots}
                alt="dots"
                id="vertical-dots-icon"
              />
            </div>
          </div>
          <div className="post-share-text-container">
            <p className="post-share-text">{post?.desc}</p>
            <img 
              src={post.photo} 
              alt=""
              className="post-share-image"
            />
          </div>
          <div className="post-bottom-content">
            <div className="post-bottom-left">
              <img 
              src={LikeIcon} 
              alt=""
              className="like-icon"
              onClick={likeHandler}
              />
              <span className="likes-amount">{like} people reacted</span>
            </div>
            <div className="post-bottom-right">
              <div className="post-bottom-right-comment-label">{post.like} Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
