import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/**
 * 📦 Função que busca as tarefas salvas no localStorage.
 * Ela é usada como função de inicialização do useState,
 * o que garante que as tarefas sejam lidas **antes do primeiro render**.
 */
const getInitialTodos = () => {
	const stored = localStorage.getItem('todos');
	return stored ? JSON.parse(stored) : [];
};

function App() {
	/**
	 * ✅ Estado principal da aplicação: todos (lista de tarefas)
	 * O React irá chamar a função getInitialTodos apenas uma vez na primeira renderização.
	 * Isso evita problemas como sobrescrever o localStorage com lista vazia no carregamento.
	 */
	const [todos, setTodos] = useState(getInitialTodos);

	/**
	 * 🔁 Este useEffect é chamado sempre que a lista de tarefas mudar.
	 * Ele salva a lista atual no localStorage, convertendo para JSON.
	 * Isso permite que a lista seja "persistida" entre recarregamentos da página.
	 */
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]); // dependência: será chamado sempre que 'todos' mudar

	/**
	 * ➕ Adiciona uma nova tarefa à lista.
	 * - Cria um objeto com id único (baseado no timestamp)
	 * - Adiciona ao array usando spread (...todos)
	 */
	const addTodo = text => {
		if (text.trim() === '') return; // validação simples para evitar tarefas vazias
		setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
	};

	/**
	 * 🗑 Remove uma tarefa pelo id.
	 * - Filtra todas as tarefas menos a que queremos remover
	 */
	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	/**
	 * ✏️ Atualiza o texto de uma tarefa existente.
	 * - Identifica o id e substitui apenas o campo 'text'.
	 * - Garante que o modo de edição seja desativado após salvar.
	 */
	const editTodo = (id, newText) => {
		setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo)));
	};

	/**
	 * 🔄 Alterna o modo de edição (visualização <-> edição)
	 */
	const toggleEdit = id => {
		setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
	};

	return (
		<div className='app'>
			<h1>To-Do List</h1>

			{/* Formulário para adicionar novas tarefas */}
			<TodoForm addTodo={addTodo} />

			{/* Lista de tarefas já adicionadas */}
			<TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleEdit={toggleEdit} />
		</div>
	);
}

export default App;
