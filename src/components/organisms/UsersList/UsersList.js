import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = (props) => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, id) => (
          <UsersListItem userData={userData} index={id} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
