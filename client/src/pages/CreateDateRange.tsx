import React, { useState, useEffect } from "react"
import FieldDateRange from "../components/FieldDateRange"
import axios from "axios"
import { http } from "../http"
import { IDateRange } from "../interfaces"
import { BsPlus, BsX, BsArrowRight } from "react-icons/bs"
// @ts-ignore
import bgImage from "../images/undraw_publish_post_vowb.svg"
import { BiError } from "react-icons/bi"
import Field from "../components/Field"
import "../styles/createdaterange.scss"

const CreateDateRange: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [initLoading, setInitLoading] = useState(true)
  const [dateRange, setDateRange] = useState<[string, string]>(["", ""])
  const [dates, setDates] = useState<IDateRange[]>([])
  const [errorFetch, setErrorFetch] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/daterange/all`,
          method: "post",
          data: {
            hrComplex,
          },
        })
        setDates(res.data)
        setInitLoading(false)
      } catch (error) {
        setInitLoading(false)
        setErrorFetch(`Error fetching date ranges: ${error.message}`)
      }
    }

    fetchData()
  }, [hrComplex, http])

  const onChangePicker = (value: any, formatString: [string, string]) => {
    setDateRange([formatString[0].slice(0, 10), formatString[1].slice(0, 10)])
    setErrorMsg("")
  }

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      let intersects = false
      for (let i = 0; i < dates.length; i++) {
        dateRange.forEach((item) => {
          if (
            new Date(item) >= new Date(dates[i].settlement) &&
            new Date(item) <= new Date(dates[i].eviction)
          ) {
            intersects = true
          }
        })
        if (intersects) {
          break
        }
      }
      if (intersects) {
        return setErrorMsg("Діапазон дат перетинається або вже існує!")
      }

      const newDateRange = {
        settlement: dateRange[0],
        eviction: dateRange[1],
        hrComplex,
        price,
      }
      const res = await axios({
        url: `${http}/daterange/create-date-range`,
        method: "post",
        data: {
          ...newDateRange,
        },
      })

      setDates((prevDates) => [...prevDates, res.data.dateRange])
      setDateRange(["", ""])
      setPrice("")
    } catch (error) {}
  }

  const handleDelete = async (id: string) => {
    try {
      await axios({
        url: `${http}/daterange/delete-date-range/${id}`,
        method: "delete",
      })

      setDates((prevDates) => prevDates.filter((date) => date._id !== id))
    } catch (error) {}
  }

  if (initLoading) {
    return <div className='wrapper'>LOADING ...</div>
  }
  if (errorFetch.length) {
    return <div className='wrapper'>Error happend: {errorFetch}</div>
  }

  const fieldFilled = dateRange[0].length && price.length
  return (
    <div className='wrapper'>
      {/* <h3></div> */}

      <div className='range-form'>
        <div className='range-form__tools'>
          <div className='range-form__btns'>
            <FieldDateRange onChangePicker={onChangePicker} />
            <Field
              disableError={true}
              exClass='range-form__price'
              field={{ value: price, param: "price", placeholder: "Price" }}
              change={handleChangePrice}
            />
            <button
              className={`btn-create ${!fieldFilled && "btn-create--disabled"}`}
              onClick={fieldFilled ? handleSubmit : () => {}}>
              <BsPlus className='btn-create__icon' />
            </button>
          </div>
          <div
            className={`range-form__error ${
              errorMsg.length && "range-form__error--active"
            }`}>
            <BiError className='range-form__error-icon' />
            {errorMsg}
          </div>
          <div className='range-form__dates'>
            {dates.map((date: any) => {
              return (
                <div className='slot' key={date._id}>
                  <span className='slot__settlement'>
                    {date.settlement.slice(0, 10)}
                  </span>
                  <BsArrowRight />
                  <span className='slot__eviction'>
                    {date.eviction.slice(0, 10)}
                  </span>
                  <span className='slot__price'>{date.price} &#8372;</span>
                  <button
                    className='slot__btn-delete'
                    onClick={() => handleDelete(date._id)}>
                    <BsX />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div className='range-form__bg-img'>
          <img src={bgImage} className='range-form__img' alt='bgImg' />
        </div>
      </div>
    </div>
  )
}

export default CreateDateRange
