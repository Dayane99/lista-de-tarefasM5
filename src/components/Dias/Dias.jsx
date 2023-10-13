
import BoxDias from "../BoxDias/BoxDias"
import { DiasStyle } from "./dias.style"

const Dias = () => {
  return (
    <DiasStyle>
      <BoxDias diaSemana={"Segunda-feira"} />
      <BoxDias diaSemana={"Terça-feira"} />
      <BoxDias diaSemana={"Quarta-feira"} />
      <BoxDias diaSemana={"Quinta-feira"} />
      <BoxDias diaSemana={"Sexta-feira"} />
      <BoxDias diaSemana={"Sábado"} />
      <BoxDias diaSemana={"Domingo"} />
    </DiasStyle>
  )
}

export default Dias
