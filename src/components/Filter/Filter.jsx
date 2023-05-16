import React from 'react';
import { StyledLabel, StyledInput } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <StyledLabel>
      Find by Name
      <StyledInput type="text" value={value} onChange={onChange} />
    </StyledLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
