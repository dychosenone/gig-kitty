import VerticalDots from './assets/dots-icon.svg';
import LikeIcon from './assets/like-icon.svg';
import axios from "axios";
import './post.css'
import { useEffect, useState } from "react";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default function Post( { post }) {
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});

  useEffect( () => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/api/users/628b3b51e9299a7d6a5a843d`);
      setUser(res.data)
    };
    fetchUser();

  }, [post.userId]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  // http://localhost:3000/api/users?userId=${post.userId}
  
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-top-content">
          <div className="post-top-info">
            <div className="post-top-left-info">
              <Link to={`profile/${user.username}`} id="post-profile-link">
                <div className="post-top-left-header">
                  <img 
                    src={user.profilePicture || PF+"person/display-avatar.jpg"}
                    alt="pfp"
                    id="post-pfp"
                  />
                  <div className="post-top-left-header-text">
                  <p className="post-top-username">
                    {user.username} 
                  </p>
                  <p className="post-top-dateposted">{format(post.createdAt)}</p>
                  </div>
                </div>
              </Link>
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
              src={PF+post.img} 
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
              <span className="likes-amount">{like} reaction/s!</span>
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
