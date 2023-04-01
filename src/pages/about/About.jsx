import React from "react";
import myVid from "../../assets/my-vid.mp4";

function About() {
  return (
    <main className="about">
      <h1>
        <span className="h1--num">01.</span> &#123;...ozkar.
        <span className="h1--text">about</span>()&#125;
      </h1>
      <div>
        <div className="about--text">
          <p>
            A few years ago, I discovered my love for web development, which was
            a natural extension of my passion for engineering. I saw the
            internet as a vast playground where I could apply my creativity and
            engineering skills to build incredible things that people could use
            and enjoy.
          </p>
          <p>
            One of my main attributes that I take pride in is my creativity. I
            love to come up with innovative and unique ideas that can make a
            difference in people's lives. I believe that the key to successful
            web development is to create something that is not only functional
            but also beautiful and user-friendly.
          </p>
          <p>
            As a web developer, I have a keen eye for detail and am always
            striving for perfection. I know that every line of code I write can
            have a significant impact on the user's experience, so I take great
            care in ensuring that everything I build is of the highest quality.
          </p>
        </div>
        <div className="about--content">
          <blockquote>
            <i className="fa-solid fa-quote-right quote1"></i>
            <i className="fa-solid fa-quote-left quote2"></i>
            <i className="about--quote">
              A creative life is an amplified life. It's a bigger life, a
              happier life, an expanded life, and a hell of a lot more
              interesting life
            </i>
            <p>- Elizabeth Gilbert</p>
          </blockquote>
          <h2>My Latest Creative Work</h2>
          <video controls className="about--vid">
            <source src={myVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}

export default About;
