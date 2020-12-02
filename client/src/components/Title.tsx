import React from "react"

interface ITitleProps {
  Icon: any
  title: string
  click?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  IconBtn?: any
}

const Title: React.FC<ITitleProps> = ({ Icon, title, click, IconBtn }) => {
  return (
    <div className='title'>
      <Icon className='title__icon' />
      <h3 className='title__text'>{title}</h3>
      {click && (
        <button className='title__btn' onClick={click}>
          <IconBtn className='title__btn-icon' />
        </button>
      )}
    </div>
  )
}

export default Title
