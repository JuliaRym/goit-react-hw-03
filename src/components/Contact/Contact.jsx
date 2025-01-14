import React from "react";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={css.contact}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </div>
  );
};

export default Contact;
