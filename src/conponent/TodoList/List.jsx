import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const List = (props) => {
  const { listAll, setListAll } = props;

  const handleClick = (id) => {
    if (id === undefined || typeof id !== 'number') return alert('삭제 실패!');
    axios.delete('http://localhost:3333/list/', {
      data: {
        id,
      },
    }).then(() => {
      if (listAll === undefined || !Array.isArray(listAll)) return;
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
  listAll: PropTypes.arrayOf(
    PropTypes.shape({
      listId: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  setListAll: PropTypes.func,
};

export default List;
