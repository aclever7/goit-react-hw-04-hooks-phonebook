import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import Section from './Section';
import Form from './Form';
import Contact from './Contact';
import Filter from './Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    return (
      parsedContacts ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleContactFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContactHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilter} />
        <Contact
          handleContactFilter={handleContactFilter}
          deleteContact={deleteContactHandler}
        ></Contact>
      </Section>
    </Container>
  );
}

export default App;
