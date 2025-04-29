import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import { addContact, deleteContact } from './redux/contactsSlice';
import { setNameFilter } from './redux/filtersSlice';
import { selectFilteredContacts } from './redux/selectors';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filteredContacts = useSelector(selectFilteredContacts);
  const userSearch = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleUserSearch = e => {
    dispatch(setNameFilter(e.target.value));
  };

  const handleNewContact = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.number === values.number
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    resetForm();
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={{ name: '', number: '' }}
        onSubmit={handleNewContact}
      />
      <SearchBox value={userSearch} onChange={handleUserSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
