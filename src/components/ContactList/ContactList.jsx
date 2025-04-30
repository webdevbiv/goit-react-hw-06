import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
