import React from 'react';
import { StyledList, StyledListItem } from './ContactsList.styled';
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
