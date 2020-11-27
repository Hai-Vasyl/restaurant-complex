import React from "react"

interface ITitleProps {
  Icon: any
  title: string
}

const Title: React.FC<ITitleProps> = ({ Icon, title }) => {
  return (
    <div className='title'>
      <Icon className='title__icon' />
      <h3 className='title__text'>{title}</h3>
    </div>
  )
}

export default Title
