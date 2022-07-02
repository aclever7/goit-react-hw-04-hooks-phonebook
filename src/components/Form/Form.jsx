import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handlerChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlerChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
