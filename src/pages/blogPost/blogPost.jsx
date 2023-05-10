import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlug } from "../../../ApiLibrary";
import { formatTimestamp } from "../../helpers/formatTimestamp";
import { Helmet } from "react-helmet";

function BlogPost() {
  const [blogData, setBlogData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const response = await getBlogBySlug(slug);
        setBlogData(response.blog);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const metaKeywordsString = blogData?.metaKeywords
    .map((keyword) => keyword.text)
    .join(", ");
  console.log(metaKeywordsString);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogData?.metaTitle}</title>
        <meta name="description" content={blogData?.metaDescription} />
        <meta name="keywords" content={metaKeywordsString} />
      </Helmet>

      <main className="blogpost">
        <h1>{blogData?.title}</h1>
        <p className="blogpost-info">
          <span className="name">Written By Ozkar Alvarez</span>•{" "}
          <span className="date">{formatTimestamp(blogData?.createdAt)}</span>
        </p>
        <div className="img-container">
          <img src={blogData?.imageUrl} alt={blogData?.title} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: blogData?.body }}
          className="blogpost-body"
        ></div>
      </main>
    </>
  );
}

export default BlogPost;
