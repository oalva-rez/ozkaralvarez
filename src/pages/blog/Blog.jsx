import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import { getBlogs } from "../../../ApiLibrary";
import SyncLoader from "react-spinners/SyncLoader";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const blogs = await getBlogs();
        setBlogs(blogs.blogs);
        setIsLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return isLoading ? (
    <main className="blog">
      <SyncLoader
        color="#64ffda"
        size={20}
        cssOverride={{
          opacity: 0.5,
          marginTop: "30vh",
          alignSelf: "center",
        }}
      />
    </main>
  ) : (
    <main className="blog">
      <h1 className="page-heading">
        <span className="h1--num">03.</span> [...ozkar.
        <span className="h1--text">blog</span>()]
      </h1>
      <div className="blog-container">
        {blogs.map((blog, index) => {
          if (blog.status === "published") {
            return <BlogCard blog={blog} key={index + blog.title} />;
          } else {
            return null;
          }
        })}
      </div>
    </main>
  );
}

export default Blog;
