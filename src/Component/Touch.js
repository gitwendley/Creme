import React from "react";
import "./Touch.css";

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        We'd love to hear from you! Reach out to us for inquiries, feedback, or
        just to say hi.
      </p>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default GetInTouch;
