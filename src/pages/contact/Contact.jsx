import React, { useState } from "react";
import { Helmet } from "react-helmet";

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
          <form>
            <input
              type="text"
              placeholder="Name"
              className="contact--name"
              name="name"
              onChange={handleChange}
              value={inputData.name}
            />
            <input
              type="text"
              placeholder="Email"
              className="contact--email"
              name="email"
              onChange={handleChange}
              value={inputData.email}
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact--subject"
              name="subject"
              onChange={handleChange}
              value={inputData.subject}
            />
            <textarea
              placeholder="Message"
              className="contact--message"
              name="message"
              onChange={handleChange}
              value={inputData.message}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
