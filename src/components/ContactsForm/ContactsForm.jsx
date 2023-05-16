import React from 'react';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './ContactsForm.styled';
import PropTypes from 'prop-types';

export default function ContactsForm({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="false"
        />
      </StyledLabel>
      <StyledLabel>
        Number:
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="false"
        />
      </StyledLabel>
      <StyledButton>Add contact</StyledButton>
    </StyledForm>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
