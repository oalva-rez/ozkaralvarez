import React from "react";

function Contact() {
  return (
    <main className="contact">
      <h1 className="page-heading">
        <span className="h1--num">03.</span> ozkar.
        <span className="h1--text">collaborateWith</span>(
        <span className="you-text">you</span>)
      </h1>
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          My inbox is always open. Use the form below for any ideas, questions,
          pizza party? Look forward to hearing from you.
        </p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="contact--name"
            name="name"
          />
          <input
            type="text"
            placeholder="Email"
            className="contact--email"
            name="email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact--subject"
            name="subject"
          />
          <textarea
            placeholder="Message"
            className="contact--message"
            name="message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
