import React from "react";

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
  const handleSubmit = async (e) => {
    setIsSending(true);
    fetch(
      "https://portfolio-emailer.netlify.app/.netlify/functions/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.status === 200) {
        setIsSending(false);
        alert("Woohoo! Message sent.");
        reset({ name: "", email: "", message: "", subject: "" });
      } else {
        setIsSending(false);
        alert("Oops! Something went wrong.");
      }
    });
  };

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
            handleChange={handleChange}
            value={inputData.name}
          />
          <input
            type="text"
            placeholder="Email"
            className="contact--email"
            name="email"
            handleChange={handleChange}
            value={inputData.email}
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact--subject"
            name="subject"
            handleChange={handleChange}
            value={inputData.subject}
          />
          <textarea
            placeholder="Message"
            className="contact--message"
            name="message"
            handleChange={handleChange}
            value={inputData.message}
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
