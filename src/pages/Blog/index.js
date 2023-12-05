import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";



const Blog = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogPosts = useCallback(async () => {
    try {
      const res = await axios.get(`${props.URL}/blog-articles`);
      setBlogPosts(res.data);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
    }
  }, [props.URL]);

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  // Sort the blog posts by date in descending order to get the most recent ones
  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Get the four most recent blog posts
  const recentPosts = sortedBlogPosts.slice(0, 4);

  //  author information NEED TO UPDATE
  const authorInfo = {
    name: "Anna Wender",
    description:
      "I am Anna a Designer based in the San Francisco Bay Area. I am passionate about sustainable design and I am here to help you create a home that is beautiful, functional and sustainable.",
    buttonText: "FIND OUT MORE",
  };

  return (
    <div className="blog-container">
        
      <div className="articles-column">
        <div className="blog-posts">
          {recentPosts.map((post) => (
            <div key={post._id} className="blog-post">
              <Link to={`/blog/${post._id}`} style={{textDecoration: "none" }}>
                <h2>{post.title}</h2>
                <img src={post.images[0].imageUrl} alt={post.title} />
              </Link>
              <p>{post.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar">
        <div className="author-section">
          <h3>Welcome to our Blog!</h3>
          <h2>{authorInfo.name}</h2>
          <p>{authorInfo.description}</p>
          <button
            onClick={() => window.open("https://calendly.com/maisonavice/book-your-discovery-call", "_blank")}
          >{authorInfo.buttonText}</button>
        </div>
        <div className="search-section">
          <h3>Search</h3>
          <input type="text" placeholder="Search this website" />
        </div>
        <div className="recent-posts-section">
          <h3>Recent Posts</h3>
          <div className="recent-post">
            {blogPosts.map((post) => (
              <div key={post._id} className="title-sidebar">
                <Link to={`/blog/${post._id}`}>
                  <h2>{post.title}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
