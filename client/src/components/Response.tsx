import React, { useState } from "react"
import { IResponseBase } from "../interfaces"
import { Link } from "react-router-dom"
import { RiUserSettingsLine, RiQuestionAnswerLine } from "react-icons/ri"
import { BsX, BsCheck } from "react-icons/bs"
import "../styles/response.scss"

interface IResponseProps {
  response: IResponseBase
}

// _id: string
//   hrComplex: string
//   owner: {
//     _id: string
//     ava: string
//     role: string
//     username: string
//   }
//   content: string
//   date: string
//   response

const Response: React.FC<IResponseProps> = ({ response }) => {
  const [replyActive, setReplyActive] = useState(false)
  const [answer, setAnswer] = useState("")

  const handleChangeReply = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
  }

  const handleSubmitReply = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log("Submited")
    } catch (error) {}
  }

  return (
    <div className='response'>
      <Link className='response__img-link' to={`/user/${response.owner._id}`}>
        <img
          className='response__user-ava'
          src={response.owner.ava}
          alt='userAva'
        />
        {response.owner.role === "admin" && (
          <RiUserSettingsLine className='response__icon-type' />
        )}
      </Link>
      <div className='response__content'>
        <div className='response__title'>
          <Link
            className='response__text-link'
            to={`/user/${response.owner._id}`}>
            {response.owner.username}
          </Link>
          <span className='response__date'>{response.date.slice(0, 10)}</span>
        </div>
        <div className='response__content-text'>{response.content}</div>
        {!response.response && (
          <div className='reply'>
            <button
              className={`reply__btn-toggle ${
                replyActive && "reply__btn-toggle-close"
              }`}
              onClick={() => setReplyActive((prevReply) => !prevReply)}>
              {replyActive ? (
                <BsX className='reply__toggle-icon' />
              ) : (
                <>
                  <RiQuestionAnswerLine className='reply__toggle-icon' />
                  <span>Відповісти</span>
                </>
              )}
            </button>
            <form
              className={`reply__form ${replyActive && "reply__form--open"}`}
              onSubmit={handleSubmitReply}>
              <input
                className='reply__input'
                type='text'
                value={answer}
                onChange={handleChangeReply}
              />
              <button className='reply__btn-submit'>
                <BsCheck className='reply__btn-icon' />
                <span className='reply__btn-title'>Приняти</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Response
