import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import Section from './Section';
import Form from './Form';
import Contact from './Contact';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, nextState) {
    if (nextState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleContactFilter = e => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          <Contact
            handleContactFilter={this.handleContactFilter()}
            deleteContact={this.deleteContactHandler}
          ></Contact>
        </Section>
      </Container>
    );
  }
}
