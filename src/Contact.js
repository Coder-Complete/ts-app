import React from "react";

function Contact() {
  return (
    <section>
      <form action="">
        <h1>Get in touch</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
