import { PencilSimple, Trash } from "@phosphor-icons/react"
import Button from "../Button/Button"
import { TarefaStyle } from "./tarefa.style"

const Tarefa = ({ tarefaNome }) => {
  return (
    <TarefaStyle>
      <div>
        <input type="checkbox" />
        <p>{tarefaNome}</p>
      </div>

      <div>
        <Button icone={<PencilSimple size={25} color="#fff" />} />
        <Button icone={<Trash size={25} color="#fff" />} />
      </div>
    </TarefaStyle>
  )
}

export default Tarefa
