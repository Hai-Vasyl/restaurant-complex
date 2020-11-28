import React, { useEffect, useState } from "react"
import Title from "../components/Title"
import { BsChatSquareQuote } from "react-icons/bs"
import axios from "axios"
import { http } from "../http"
import { IResponse } from "../interfaces"
import Response from "../components/Response"
import "../styles/responses"

const Responses: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [responses, setResponses] = useState<IResponse[]>([])
  const [initLoading, setInitLoading] = useState(true)

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

  console.log({ responses })

  if (initLoading) {
    return <div className='wrapper'>LOADING ...</div>
  }
  return (
    <div className='wrapper'>
      <Title Icon={BsChatSquareQuote} title='Відгуки' />
      <div className='responses-container'>
        {responses.map((response) => {
          return (
            <div key={response._id} className='response-wrapper'>
              <Response response={response} />
              <div className='answer-wrapper'>
                {response.answers.map((answer) => {
                  return <Response key={answer._id} response={answer} />
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
