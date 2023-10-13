import { useRef, useState } from 'react'
import { v4 as idAleatorio } from 'uuid'


const App = () => {
  const tarefaRef = useRef()
  const [tarefas, setTarefa] = useState([])

  function inserirTarefa() {

    setTarefa([{
      id: idAleatorio(),
      nomeTarefa: tarefaRef.current.value
    }, ...tarefas])

  }

  function concluirTarefa(id) {

  }

  function excluirTarefa(id) {
    setTarefa(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <div>
      <h1>Lista de Tarefa</h1>

      <div className="nome">
        <label htmlFor="Tarefa">Tarefa</label>
        <input placeholder="Digite sua tarefa" type="text" ref={tarefaRef} />
      </div>

      <button onClick={inserirTarefa}>Enviar</button>

      {
        tarefas.map(tarefa => (
          <div key={tarefa.id}>
            <p>{tarefa.nomeTarefa}</p>
            <div className="name">
              <button onClick={() => concluirTarefa(tarefa.id)}>Concluído</button>
              <button>Editar</button>
              <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default App
