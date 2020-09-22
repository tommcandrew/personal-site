import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { Link } from "react-router-dom";
import post1 from "../assets/blogPosts/27-december-2019.md";
import post2 from "../assets/blogPosts/01-january-2020.md";
import post3 from "../assets/blogPosts/03-january-2020.md";
import post4 from "../assets/blogPosts/08-march-2020.md";
import post5 from "../assets/blogPosts/21-september-2020.md";

const imports = {
  "different-ways-to-render-a-web-page": post5,
  "a-guide-to-regular-expressions": post4,
  "deploying-a-mern-app-for-free-to-heroku": post3,
  "sliding-page-transitions": post2,
  "setting-up-an-express-server": post1,
};

const Post = ({ match }) => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    const path = match.params.post;
    fetch(imports[path])
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="post__wrapper">
      <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }} />
      <Link to="/blog" className="post__back">
        Back
      </Link>
    </div>
  );
};

export default Post;
