import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const id = toast.loading("Sending message to Ozkar...");

    const response = await fetch(
      "https://portfolio-emailer.netlify.app/.netlify/functions/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );

    if (response.status === 200) {
      setInputData({ name: "", email: "", message: "", subject: "" });
      toast.update(id, {
        render: "Message sent beautifully.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(id, {
        render:
          "Oh no... Something went terribly wrong. Please use other form of contact.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ozkar Alvarez | Contact</title>
        <meta
          name="description"
          content="Ready to take your web development project to the next level? We're here to help! Our contact page is the perfect starting point for getting in touch with our team of Full Stack Web Development experts. Whether you have a specific question or are ready to discuss your project in detail, we're here to listen and offer guidance."
        />
      </Helmet>
      <main className="contact">
        <h1 className="page-heading">
          <span className="h1--num">03.</span> ozkar.
          <span className="h1--text">collaborateWith</span>(
          <span className="you-text">you</span>)
        </h1>
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <p>
            My inbox is always open. Use the form below for any ideas,
            questions, pizza party? Look forward to hearing from you.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="contact--name"
              name="name"
              onChange={handleChange}
              value={inputData.name}
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="contact--email"
              name="email"
              onChange={handleChange}
              value={inputData.email}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact--subject"
              name="subject"
              onChange={handleChange}
              value={inputData.subject}
              required
            />
            <textarea
              placeholder="Message"
              className="contact--message"
              name="message"
              onChange={handleChange}
              value={inputData.message}
              required
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <ToastContainer
          position="top-right"
          hideProgressBar={true}
          theme="dark"
        />
      </main>
    </>
  );
}

export default Contact;
