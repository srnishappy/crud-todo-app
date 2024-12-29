import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './List';
import { getData, createData } from '../api/Todo';
const Todo = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    handleGetdata();
  }, []);

  const handleGetdata = async () => {
    getData()
      .then((res) => {
        console.log(res.data.todos);
        setData(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnchang = (e) => {
    setTitle(e.target.value);
  };
  const handleAddData = () => {
    createData({ title })
      .then((res) => {
        handleGetdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input type="text" name="title" onChange={handleOnchang} />
      <button onClick={handleAddData}>Add Data</button>
      {data.map((item, index) => (
        <List key={index} item={item} handleGetdata={handleGetdata} />
      ))}
    </div>
  );
};

export default Todo;
