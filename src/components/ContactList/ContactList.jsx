import Contact from "../Contact/Contact";
import s from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
