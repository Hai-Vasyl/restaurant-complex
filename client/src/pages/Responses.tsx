import React from "react"
import Title from "../components/Title"
import { BsChatSquareQuote } from "react-icons/bs"

const Responses: React.FC = () => {
  return (
    <div className='wrapper'>
      <Title Icon={BsChatSquareQuote} title='Відгуки' />
      <div>Responses Page</div>
    </div>
  )
}

export default Responses
