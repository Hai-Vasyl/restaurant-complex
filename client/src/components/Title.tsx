import React from "react"

const Title: React.FC<{ Icon: any }> = ({ Icon }) => {
  return (
    <div className='title'>
      <Icon className='title__icon' />
      <h3 className='title__text'>Галерея</h3>
    </div>
  )
}

export default Title
