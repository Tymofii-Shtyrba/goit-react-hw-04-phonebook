import React from 'react';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
