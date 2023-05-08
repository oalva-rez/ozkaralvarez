import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import { getBlogs } from "../../../ApiLibrary";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const blogs = await getBlogs();
      setBlogs(blogs.user.blogs);
    })();
  }, []);
  return (
    <main className="blog">
      <h1 className="page-heading">
        <span className="h1--num">03.</span> [...ozkar.
        <span className="h1--text">blog</span>()]
      </h1>
      <div className="blog-container">
        {blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={index + blog.title} />;
        })}
      </div>
    </main>
  );
}

export default Blog;
