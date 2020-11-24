import React from "react"
import "../styles/buttonarrow.scss"

interface IButtonArrowProps {
  click(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void | undefined
  Icon: any
  exClass?: string
}

const ButtonArrow: React.FC<IButtonArrowProps> = ({ click, Icon, exClass }) => {
  return (
    <button className={`btn-arrow ${exClass}`} onClick={click}>
      <Icon className='btn-arrow__icon' />
    </button>
  )
}

export default ButtonArrow
