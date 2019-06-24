import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import List from './List';
import './TodoList.scss';

const TodoList = () => {
  const [listAll, setListAll] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/list/list').then(({ data }) => {
      const { listData } = data;
      setListAll([...listData]);
    });
  }, []);

  return (
    <div className="body">
      <h1>Todo List</h1>
      <List
        listAll={listAll}
        setListAll={setListAll}
      />
      <Input
        listAll={listAll}
        setListAll={setListAll}
      />
    </div>
  );
};
export default TodoList;
