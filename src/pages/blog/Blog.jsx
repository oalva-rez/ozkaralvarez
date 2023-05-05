import React from "react";
import BlogCard from "../../components/blogCard/BlogCard";

function Blog() {
  const BLOG_DATA = [
    {
      title:
        "Why we should work with AI not against it and why its not going anywhere bro. Embrace it",
      image: "https://placehold.co/475x192",
      tags: ["AI", "Machine-learning", "Deep-learning", "ChatGPT"],
      date: "Mar 21, 2023",
    },
    {
      title: "Why we should work with AI not against it",
      image: "https://placehold.co/475x192",
      tags: ["AI", "Machine-learning", "Deep-learning", "ChatGPT"],
      date: "Mar 21, 2023",
    },
    {
      title: "Why we should work with AI not against it",
      image: "https://placehold.co/475x192",
      tags: ["AI", "Machine-learning", "Deep-learning", "ChatGPT"],
      date: "Mar 21, 2023",
    },
    {
      title: "Why we should work with AI not against it",
      image: "https://placehold.co/475x192",
      tags: ["AI", "Machine-learning", "Deep-learning", "ChatGPT"],
      date: "Mar 21, 2023",
    },
  ];
  return (
    <main className="blog">
      <h1 className="page-heading">
        <span className="h1--num">03.</span> [...ozkar.
        <span className="h1--text">blog</span>()]
      </h1>
      <div className="blog-container">
        {BLOG_DATA.map((blog, index) => {
          return <BlogCard blog={blog} key={index + blog.title} />;
        })}
      </div>
    </main>
  );
}

export default Blog;
