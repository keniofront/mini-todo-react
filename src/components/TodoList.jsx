import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, editTodo, toggleEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
