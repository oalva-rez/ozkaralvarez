import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import { getBlogs } from "../../../ApiLibrary";
import SyncLoader from "react-spinners/SyncLoader";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

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
            ReactGA.send({
                hitType: "pageview",
                page: "/blog",
                title: "Blog Page Visit",
            });
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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ozkar Alvarez | Blog</title>
                <meta
                    name="description"
                    content="Our blog page is the ultimate destination for keeping up with the latest trends and techniques in Full Stack Web Development. From tutorials to opinion pieces, our team of experts shares their knowledge and experience to help you stay ahead of the curve. Whether you're a seasoned developer or just starting out, our blog is your go-to source for practical tips and insights that will take your skills to the next level. So grab a coffee, settle in, and join us on our journey to explore the exciting world of web development."
                />
            </Helmet>
            <main className="blog">
                <h1 className="page-heading">
                    <span className="h1--num">03.</span> [...ozkar.
                    <span className="h1--text">blog</span>()]
                </h1>
                <div className="blog-container">
                    {blogs.map((blog, index) => {
                        if (blog.status === "published") {
                            return (
                                <BlogCard
                                    blog={blog}
                                    key={index + blog.title}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </main>
        </>
    );
}

export default Blog;
