import { useState } from 'react'

// Componente individual de tarefa
function TodoItem({ todo, removeTodo, editTodo, toggleEdit }) {
  // Estado interno para edição
  const [editText, setEditText] = useState(todo.text)

  // Envia a edição
  const handleEdit = (e) => {
    e.preventDefault()
    if (editText.trim()) {
      editTodo(todo.id, editText) // envia o texto editado ao App
    }
  }

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        // Formulário de edição de tarefa
        <form onSubmit={handleEdit}>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="actions">
            <button onClick={() => toggleEdit(todo.id)}>Editar</button>
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
