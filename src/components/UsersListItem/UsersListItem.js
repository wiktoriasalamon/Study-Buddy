import React from 'react';
import PropTypes from 'prop-types';

const showIndex = (index) => alert(`This is student #${index}`);

const UsersListItem = ({
  index,
  userData: { name, attendance = '0%', average },
}) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.number,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
