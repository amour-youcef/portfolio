import React from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              CONTACTEZ-MOI
            </p>
            <p className="separator" />
            <p className="subtitle">
             
              <span className="mail">
               amour
               <i className="fas fa-circle dot" />
               youssouf
                <i className="fas fa-at at" />
               gmail
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="./mail.php"  method="POST">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
