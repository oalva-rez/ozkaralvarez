import React from "react";

function BlogCard({ blog }) {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  return (
    <div className="blog-card">
      <div className="img-container">
        <img src={blog.imageUrl} alt={blog.title} />
      </div>
      <div className="blog-card-content">
        <h2>{blog.title}</h2>
        <p className="meta-description">{blog.metaDescription}</p>
        <ul>
          {blog.metaKeywords.map((tag, index) => {
            return <li key={index + tag}>#{tag.text}</li>;
          })}
        </ul>
        <p className="blog-card-date">{formatTimestamp(blog.createdAt)}</p>
      </div>
    </div>
  );
}

export default BlogCard;
