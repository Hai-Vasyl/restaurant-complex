import React, { useEffect, useState } from "react"
import Title from "../components/Title"
import { BsChatSquareQuote, BsReplyAll } from "react-icons/bs"
import axios from "axios"
import { http } from "../http"
import { IResponse, IResponseBase } from "../interfaces"
import Response from "../components/Response"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { RiUserSettingsLine } from "react-icons/ri"
import Button from "../components/Button"
import useCreateResponse from "../hooks/useCreateResponse"
import "../styles/responses"

const Responses: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [responses, setResponses] = useState<IResponse[]>([])
  const [initLoading, setInitLoading] = useState(true)
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)
  const [respose, setResponse] = useState("")
  const { createResponse } = useCreateResponse()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/response/get-all`,
          method: "post",
          data: {
            hrComplex,
          },
        })
        setResponses(res.data)
        setInitLoading(false)
      } catch (error) {}
    }

    fetchData()
  }, [hrComplex, http])

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value)
  }

  const setNewAnswer = (answer: IResponseBase) => {
    setResponses((prevResponses) =>
      prevResponses.map((response) => {
        if (response._id === answer.response) {
          return {
            ...response,
            answers: [answer, ...response.answers],
          }
        }
        return response
      })
    )
  }

  const handleSubmitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()
      const newResponse = await createResponse(hrComplex, respose)
      setResponses((prevResponses) => [newResponse, ...prevResponses])
      setResponse("")
    } catch (error) {}
  }

  const handleDeleteResponse = async (id: string) => {
    try {
      await axios({
        url: `${http}/response/delete/${id}`,
        method: "delete",
        headers: token && {
          Authorization: `Basic ${token}`,
        },
      })

      let responsesCopy = [...responses]
      responsesCopy = responsesCopy.filter((res) => res._id !== id)
      responsesCopy = responsesCopy.map((res) => {
        return {
          ...res,
          answers: res.answers.filter((answer) => answer._id !== id),
        }
      })
      setResponses(responsesCopy)
    } catch (error) {}
  }

  if (initLoading) {
    return <div className='wrapper'>LOADING ...</div>
  }
  return (
    <div className='wrapper'>
      <Title Icon={BsChatSquareQuote} title='Відгуки' />
      <div className='response form-response'>
        <Link className='response__img-link' to={`/user/${user._id}`}>
          <img className='response__user-ava' src={user.ava} alt='userAva' />
          {user.role === "admin" && (
            <RiUserSettingsLine className='response__icon-type' />
          )}
        </Link>
        <div className='response__content'>
          <div className='response__title'>
            <Link className='response__text-link' to={`/user/${user._id}`}>
              {user.username}
            </Link>
          </div>
          <form
            className='response__content-text'
            onSubmit={
              respose.trim().length
                ? handleSubmitForm
                : (event) => {
                    event.preventDefault()
                  }
            }>
            <input
              className='response__form-input'
              type='text'
              value={respose}
              onChange={handleChangeForm}
            />
            <Button
              exClass={`btn-primary btn-post ${
                !respose.trim().length && "btn-disabled"
              }`}
              Icon={BsReplyAll}
              title='Відправити'
              click={respose.trim().length ? handleSubmitForm : () => {}}
            />
          </form>
        </div>
      </div>
      <div className='responses-container'>
        {responses.map((response) => {
          return (
            <div key={response._id} className='response-wrapper'>
              <Response
                response={response}
                onDeleteResponse={handleDeleteResponse}
                setNewAnswer={setNewAnswer}
              />
              <div className='answer-wrapper'>
                {response.answers &&
                  response.answers.map((answer) => {
                    return (
                      <Response
                        key={answer._id}
                        onDeleteResponse={handleDeleteResponse}
                        response={answer}
                      />
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Responses
