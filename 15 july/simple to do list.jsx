import React, { useState } from 'react';

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Simple To-Do List</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a to-do item"
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
