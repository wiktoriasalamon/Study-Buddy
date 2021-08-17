import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 34px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ average, theme }) => {
    if (average > 4) {
      return theme.colors.succes;
    }
    if (average > 3) {
      return theme.colors.warning;
    }
    if (average > 2) {
      return theme.colors.error;
    }

    return theme.colors.grey;
  }};
`;

const Average = ({ average }) => {
  return <Wrapper average={parseFloat(average)}>{average}</Wrapper>;
};

Average.propTypes = {
  average: PropTypes.number,
};

export default Average;
