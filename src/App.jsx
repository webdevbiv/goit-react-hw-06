// import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { setNameFilter } from './redux/filtersSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const userSearch = useSelector(state => state.filters.name);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [userSearch, setUserSearch] = useState('');

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(userSearch.toLowerCase())
  );

  const handleUserSearch = e => dispatch(setNameFilter(e.target.value));

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
