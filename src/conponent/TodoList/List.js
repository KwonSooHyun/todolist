import React from 'react';
import axios from 'axios';

const List = (props) => {
  const { list, setList} = props;
  
  const handleClick = (id) => {
    axios.delete('http://localhost:3333/list/', {
      data: {
        id: id
      }
    }).then(() =>
      axios.get('http://localhost:3333/list/list').then(({data}) => {
        setList(data.list);
      })
    );
  };
  
  
  return(
    <div>
      {Object.keys(list).map((key) => (
        <li key={list[key].listId}>
          {list[key].text}
          <button onClick={
            e => {
              e.preventDefault();
              handleClick(list[key].listId)
            }
          }>x</button>
        </li>)
      )}
    </div>
  )
};

export default List;