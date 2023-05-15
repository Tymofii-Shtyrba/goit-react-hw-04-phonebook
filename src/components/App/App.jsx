import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const onChange = e => {
    setFilter(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { id: nanoid(), name: name.value, number: number.value };
    setContacts(prevState => [...prevState, newContact]);
    e.target.reset();
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterContacts = contacts => {
    if (filter === '') return contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  useEffect(
    () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  console.log(contacts);
  return (
    <div>
      <ContactsForm onSubmit={onSubmit} />
      <Filter value={filter} onChange={onChange} />
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ContactsList contacts={filterContacts(contacts)} onDelete={onDelete} />
      )}
    </div>
  );
}
