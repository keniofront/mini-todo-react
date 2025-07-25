import { useState } from 'react'

// Componente responsável pelo formulário de nova tarefa
function TodoForm({ addTodo }) {
  const [input, setInput] = useState('') // estado local do campo de texto

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault() // previne recarregamento da página
    addTodo(input) // chama função do App para adicionar tarefa
    setInput('') // limpa o campo após adicionar
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // atualiza o estado a cada digitação
        placeholder="Digite uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TodoForm
