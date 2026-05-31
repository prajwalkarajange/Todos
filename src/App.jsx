import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    const t = text.trim();

    if (!t) return;

    setTodos([...todos, { id: Date.now() + Math.random(), text: t, done: false }]);
    setText('');
  }
  const toggle = (id) => {

    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  };

  const remove = (id) => {
    setTodos(todos.filter((t) => t.id !== id));

  }

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  }

  const saveEdit = (id) => {
    const value = editText.trim();
    if (!value) return;

    setTodos(todos.map((t) => (t.id === id ? { ...t, text: value } : t)));
    setEditingId(null);
    setEditText('');
  }



  return (
    <div className="todo-card">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Your Todo List</h1>
        <span className="tagline">Simple · Fast · Focused</span>
      </div>

      <div className="flex gap-3 mb-4">
        <input
          id="input-text"
          className="todo-input"
          value={text}
          onChange={(e) => { setText(e.target.value) }}
          placeholder="What do you want to accomplish today?"
        />
        <button className="btn-primary" onClick={addTodo}>Add</button>
      </div>

      <ul id='todo' className="space-y-3">
        {todos.length === 0 ? (
          <h4 className="text-slate-500">No todos yet — add something delightful.</h4>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item flex items-center justify-between gap-3 p-3 rounded-md">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type='checkbox'
                  className='toggle'
                  checked={todo.done}
                  onChange={() => { toggle(todo.id) }}
                />

                {editingId === todo.id ? (
                  <input
                    className="todo-edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span className={todo.done ? 'todo-item-done' : ''}>{todo.text}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {editingId === todo.id ? (
                  <>
                    <button className="btn-success" onClick={() => saveEdit(todo.id)}>Save</button>
                    <button className="btn-secondary" onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button className="btn-edit" onClick={() => startEdit(todo)}>Edit</button>
                )}
                <button className="btn-danger" onClick={() => remove(todo.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
