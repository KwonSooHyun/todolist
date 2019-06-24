import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const List = (props) => {
  const { listAll, setListAll } = props;

  const handleClick = (id) => {
    axios.delete('http://localhost:3333/list/', {
      data: {
        id,
      },
    }).then(() => {
      setListAll(listAll.filter(list => list.listId !== id));
    });
  };

  return (
    <div>
      {listAll.map(list => (
        <li key={list.listId}>
          {list.text}
          <button onClick={
            (e) => {
              e.preventDefault();
              handleClick(list.listId);
            }
          }
          >
            x
          </button>
        </li>
      ))}
    </div>
  );
};

List.propTypes = {
  listAll: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  setListAll: PropTypes.func,
};

export default List;
