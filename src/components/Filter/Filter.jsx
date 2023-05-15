import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find by Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
