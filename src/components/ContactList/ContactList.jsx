import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
          <button className={css.delete} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
