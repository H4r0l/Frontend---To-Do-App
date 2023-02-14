import React, { useEffect, useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

import Form from './components/Form'
import Section from './components/Section'
import List from 'semantic-ui-react'

const appTitle = "To-Do App"

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, [])

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  }

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  }
  return (
    <div className="App ui container center aligned">
      <section>
          <h1>{appTitle}</h1>
      </section>

      <section>
          <Form addTodo={addTodo} />
      </section>

      <section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </section>
    </div>
  )
}

export default App
