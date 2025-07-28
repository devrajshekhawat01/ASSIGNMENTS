import React, { useState } from 'react';

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // null means not editing

  const handleAddOrUpdate = () => {
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    if (editIndex !== null) {
      // Update existing item
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = trimmed;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add new item
      setTodos([...todos, trimmed]);
    }

    setInputValue('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue('');
    }
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do List with Edit & Delete</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a to-do item"
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAddOrUpdate} style={{ padding: '8px 16px', marginLeft: '10px' }}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {todo}{' '}
            <button onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
