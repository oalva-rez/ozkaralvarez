import React from "react";
import { formatTimestamp } from "../../helpers/formatTimestamp";

function BlogCard({ blog }) {
  return (
    <a href={"/blog/" + blog.slug} className="blog-card">
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
    </a>
  );
}

export default BlogCard;
