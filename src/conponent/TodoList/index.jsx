import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import List from './List';
import './TodoList.scss';

const TodoList = () => {
  const [list, setList] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/list/list').then(({ data }) => {
      setList(data.list);
    });
  }, []);

  return (
    <div className="body">
      <h1>Todo List</h1>
      <List
        list={list}
        setList={setList}
      />
      <Input
        setList={setList}
      />
    </div>
  );
};
export default TodoList;
