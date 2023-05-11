import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlug } from "../../../ApiLibrary";
import { formatTimestamp } from "../../helpers/formatTimestamp";
import { Helmet } from "react-helmet";
import SyncLoader from "react-spinners/SyncLoader";

function BlogPost() {
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { slug } = useParams();

  const contentRef = useRef(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const response = await getBlogBySlug(slug);
        setBlogData(response.blog);
        setIsLoading(false);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // useEffect(() => {
  //   const preElements = contentRef.current.querySelectorAll("pre");

  //   preElements.forEach((pre) => {
  //     // Modify the content of the <pre> element as needed
  //     const preInnerHTML = pre.innerHTML;
  //     pre.innerHTML = `<code class="language-javascript">${preInnerHTML}</code>`;
  //     console.log(pre.innerHTML);
  //   });
  // }, [blogData]);

  const metaKeywordsString = blogData?.metaKeywords
    .map((keyword) => keyword.text)
    .join(", ");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogData?.metaTitle}</title>
        <meta name="description" content={blogData?.metaDescription} />
        <meta name="keywords" content={metaKeywordsString} />
      </Helmet>

      {isLoading ? (
        <main
          className="blogpost"
          style={{ alignSelf: "center", justifySelf: "center" }}
        >
          <SyncLoader
            color="#64ffda"
            size={20}
            cssOverride={{ opacity: 0.5 }}
          />
        </main>
      ) : (
        <main className="blogpost">
          <h1>{blogData?.title}</h1>
          <p className="blogpost-info">
            <span className="name">Written By Ozkar Alvarez</span>
            <span className="dot">•</span>{" "}
            <span className="date">{formatTimestamp(blogData?.createdAt)}</span>
          </p>
          <div className="img-container">
            <img src={blogData?.imageUrl} alt={blogData?.title} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blogData?.body }}
            className="blogpost-body"
            ref={contentRef}
          ></div>
        </main>
      )}
    </>
  );
}

export default BlogPost;
