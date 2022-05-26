import Share from '../share/Share';
import Post from '../post/Post';

import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed( {username}) {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("http://localhost:3000/api/posts/profile/" + username)
      : await axios.get("http://localhost:3000/api/posts/timeline/628b281fa056f6f86e0c67a1");
      setPosts(res.data)
    }
    fetchPosts();
  },[username])

    //individual post
    //http://localhost:3000/api/posts/628ef1e6de065e3cceb98e5e

    // timeline feed
    //http://localhost:3000/api/posts/timeline/628b281fa056f6f86e0c67a1

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
