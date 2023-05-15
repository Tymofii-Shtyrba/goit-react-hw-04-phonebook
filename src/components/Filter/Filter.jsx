import React from 'react';
import { StyledLabel, StyledInput } from './Filter.styled';
export default function Filter({ value, onChange }) {
  return (
    <StyledLabel>
      Find by Name
      <StyledInput type="text" value={value} onChange={onChange} />
    </StyledLabel>
  );
}
