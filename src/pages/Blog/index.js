// Blog.js

import React, { useEffect, useState } from 'react';
import "./styles.css";
import axios from 'axios';

function Blog({ URL }) {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    
    axios.get(`${URL}/api/blog`) 
      .then(response => {
        setBlogPosts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, [URL]);

  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post._id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
