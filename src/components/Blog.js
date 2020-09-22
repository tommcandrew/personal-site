import React, { useEffect } from "react";
import gsap from "gsap";
import { posts } from "../assets/posts";
import { Link } from "react-router-dom";

const tl = gsap.timeline();

const Blog = () => {
  useEffect(() => {
    tl.to(
      ".blog__preview",
      0.8,
      {
        opacity: 1,
        y: -15,
        ease: "Power2.ease-out",
        stagger: 0.15,
      },
      "+=0.3"
    );
  }, []);
  return (
    <div className="blog__wrapper">
      <div className="blog__content">
        {posts.map((post, index) => (
          <Link to={`/blog/${post.path}`} key={index}>
            <div className="blog__preview">
              <p className="blog__date">{post.date}</p>
              <h1 className="blog__title">{post.title}</h1>
              <p className="blog__previewText">{post.previewText}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
