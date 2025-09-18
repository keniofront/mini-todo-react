import { useState } from "react";
import { FiEdit, FiTrash2, FiSave, FiClipboard } from "react-icons/fi";

function TodoItem({ todo, removeTodo, editTodo, toggleEdit }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      editTodo(todo.id, editText);
    }
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <form onSubmit={handleEdit} className=" edit-item">
          <input value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button type="submit" style={{ backgroundColor: "white", color: "#00BCBE" }}>
            <FiSave className="icon" /> <span className="text">Salvar</span>
          </button>
        </form>
      ) : (
        <>
          <FiClipboard className="icon" style={{ color: "#023047" }} />
          <span>{todo.text}</span>
          <div className="actions">
            <button onClick={() => toggleEdit(todo.id)} style={{ backgroundColor: "#00BCBE" }}>
              <FiEdit className="icon" />
              <span className="text">Editar</span>
            </button>
            <button onClick={() => removeTodo(todo.id)} style={{ backgroundColor: "#B6B6B6" }}>
              <FiTrash2 className="icon" />
              <span className="text">Remover</span>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
