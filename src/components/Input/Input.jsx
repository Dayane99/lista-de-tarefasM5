import Button from "../Button/Button"
import { ButtonStyle } from "./buttonInput.style"
import { InputStyle } from "./input.Style"

const Input = ({ icone, width, contentPH }) => {
  return (
    <>
      <InputStyle type="text" width={width} placeholder={contentPH} />
      <ButtonStyle>
        <Button icone={icone} />
      </ButtonStyle>
    </>
  )
}

export default Input
