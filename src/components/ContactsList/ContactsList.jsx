import React from 'react';
import { StyledList, StyledListItem } from './ContactsList.styled';
import PropTypes from 'prop-types';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <StyledList>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <StyledListItem key={id}>
            <span>
              {name}: {number}
            </span>
            <button onClick={() => onDelete(id)}>Delete</button>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
