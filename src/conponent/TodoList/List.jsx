import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const List = (props) => {
  const { list, setList } = props;

  const handleClick = (id) => {
    axios.delete('http://localhost:3333/list/', {
      data: {
        id,
      },
    }).then(() => axios.get('http://localhost:3333/list/list').then(({ data }) => {
      setList(data.list);
    }));
  };

  return (
    <div>
      {Object.keys(list).map(key => (
        <li key={list[key].listId}>
          {list[key].text}
          <button onClick={
            (e) => {
              e.preventDefault();
              handleClick(list[key].listId)
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
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  setList: PropTypes.func,
};

export default List;
