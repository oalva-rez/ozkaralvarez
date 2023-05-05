import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-card-content">
        <h2>{blog.title}</h2>
        <ul>
          {blog.tags.map((tag, index) => {
            return <li key={index + tag}>#{tag}</li>;
          })}
        </ul>
        <p className="blog-card-date">{blog.date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
