import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledName, StyledAttendance, NameWrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import { showIndex } from 'helpers/helpers';

const UsersListItem = ({ index, userData: { name, attendance = '0%', average } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <NameWrapper>
        <StyledName>
          {name}
          <Button onClick={() => showIndex(index)} />
        </StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </NameWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.number.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
