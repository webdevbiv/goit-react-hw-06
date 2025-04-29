import { useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import useLocalStorage from "./hooks/useLocalStorage";

import initialContacts from "./data/contacts.json";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", initialContacts);
  const [userSearch, setUserSearch] = useState("");

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(userSearch.toLowerCase())
  );

  const handleUserSearch = (e) => setUserSearch(e.target.value);

  const handleNewContact = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.number === values.number
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    const newContact = { ...values, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, newContact]);

    resetForm();
  };

  const handleDeleteContact = (id) => {
    console.log(id);

    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={{ name: "", number: "" }}
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
