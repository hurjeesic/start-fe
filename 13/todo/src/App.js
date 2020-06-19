import React, { useState } from 'react';
import Header from './Header';
import todoModel from './todo-model';
import { loadData, saveData } from './data-manager';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(loadData());

  function heandleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push({ ...todoModel, id: '', text: todo, isDone: false });
    setTodo('');
    setTodos(newTodos);
    saveData(newTodos);
  }

  function deleteData(event) {
    const { index } = event.target.parentElement.dataset;
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
    saveData(newTodos);
  }

  function updateCheck(event) {
    const { index } = event.target.parentElement.dataset;
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;

    setTodos(newTodos);
    saveData(newTodos);
  }

  return (
    <div className="container">
      <header>
        <Header></Header>
        <form className="new-task" id="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="input"
            placeholder="할 일을 입력하세요"
            value={todo}
            onChange={heandleChange}
          />
        </form>
      </header>
      <div id="result">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index} data-index={index}>
                <button className="delete" onClick={deleteData}>
                  ×
                </button>
                <input
                  type="checkbox"
                  className="toggle-checked"
                  onChange={updateCheck}
                  checked={todo.isDone ?? 'checked'}
                />
                <span className="text">{todo.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
