import Share from '../share/Share';
import Post from '../post/Post';

import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    // const fetchPosts = async () => {
    //   const res = await axios.get("posts/timeline/628b281fa056f6f86e0c67a1");
    //   console.log(res)
    // }
    // fetchPosts();
    const res = axios.get("http://localhost:5000/api/posts/");
    console.log(res)
  },[])

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  )
}
