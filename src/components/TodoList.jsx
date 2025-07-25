import TodoItem from './TodoItem'

// Componente que renderiza a lista de tarefas
function TodoList({ todos, removeTodo, editTodo, toggleEdit }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id} // sempre use uma key única em listas
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList
