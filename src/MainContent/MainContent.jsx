import { MagnifyingGlass, Plus } from "@phosphor-icons/react"
import Input from "../components/Input/Input"
import { MainContentStyle } from "./mainContent.style"
import Button from "../components/Button/Button"
import Dias from "../components/Dias/Dias"
import Tarefa from "../components/Tarefa/Tarefa"


const MainContent = () => {
  return (
    <MainContentStyle>

      <section>
        <div className="dias">
          <Dias />
        </div>

        <div className="todo">

          <div className="inserirBuscar">
            <Input icone={<Plus size={32} color="#fff" />} width={"1100px"} contentPH={"Digite uma nova tarefa ..."} />
            <Input icone={<MagnifyingGlass size={32} color="#fff" />} width={"250px"} contentPH={"Pesquisar ..."} />
          </div>

          <div className="lista">
            <Tarefa tarefaNome={"blablabla"} />
            <Tarefa tarefaNome={"blablabla"} />
            <Tarefa tarefaNome={"blablabla"} />
          </div>

        </div>
      </section>
      <footer>
        <p>Todos os direitos reservados©</p>
      </footer>
    </MainContentStyle>
  )
}

export default MainContent
