import React from 'react'
import { useEffect, useState } from 'react';

function Todos() {
  const data = [
    {
      text: "Learn JavaScript",
      done: true
    },
    {
      text: "Learn React",
      done: false
    },
    {
      text: "Have a life!",
      done: false
    }
  ];

  const [list, setList] = useState(() => { return JSON.parse(localStorage.getItem('data')) || data });

  const [filter, setFilter] = useState("all");


  const filteredData = (filter) => {
    if (filter === "all") {
      return list;
    }
    else if (filter === "completed") {
      return list.filter(i => i.done);

    }
    else if (filter === "active") {
      return list.filter(i => !i.done);
    }
  }

  const destroyToDo = (e) => {
    const updatedList = filteredData(filter).filter((item, i) => i !== e);
    setList(updatedList);
  };

  const clearCompleted = (e) => {
    const newList = filteredData(filter).filter((item => !item.done));
    setList(newList);
  };

  const checkboxToDo = (i) => {
    const copyList = [...list];
    copyList[i].done = !copyList[i].done;
    setList(copyList);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var newItem = { text: e.target.text.value, done: false };
    if (e.target.elements.text.value.trim() === "") {
      return false;
    }
    setList([...list, newItem]);
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input className="new-todo" name='text' value={list.text} placeholder="What needs to be done?" autoFocus />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list"> {filteredData(filter).map((x, i) => (
            <li className={x.done ? "completed" : ""} id="our-list" key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" name='checkbox' checked={x.done} onChange={() => checkboxToDo(i)} />
                <label>{x.text}</label>
                <button className="destroy" onClick={() => destroyToDo(i)}></button>
              </div>
            </li>
          ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{filteredData("active").length}</strong>
            &nbsp;items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" onClick={() => { setFilter("all") }}>All</a>
            </li>
            <li>
              <a href="#/" onClick={() => { setFilter("active") }}>Active</a>
            </li>
            <li>
              <a href="#/" onClick={() => { setFilter("completed") }} >Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={() => { clearCompleted() }}>
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default Todos;