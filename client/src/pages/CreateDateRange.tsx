import React, { useState, useEffect } from "react"
import FieldDateRange from "../components/FieldDateRange"
import axios from "axios"
import { http } from "../http"
import { IDateRange } from "../interfaces"
import { BsPlus, BsX, BsArrowRight, BsPlusSquare } from "react-icons/bs"
// @ts-ignore
import bgImage from "../images/undraw_publish_post_vowb.svg"
import { BiError } from "react-icons/bi"
import Field from "../components/Field"
import Title from "../components/Title"
import "../styles/createdaterange.scss"

const CreateDateRange: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [initLoading, setInitLoading] = useState(true)
  const [dateRange, setDateRange] = useState<{
    settlement: string
    eviction: string
  }>({
    settlement: "",
    eviction: "",
  })
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

  const onChangePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (new Date(event.target.value) < new Date()) {
      return setErrorMsg("Ви не можете вибрати дату яка закінчилася!")
    }

    setDateRange({ ...dateRange, [event.target.name]: event.target.value })

    Object.keys(dateRange).forEach((date) => {
      if (
        event.target.name !== date &&
        //@ts-ignore
        new Date(dateRange[date]) >= new Date()
      ) {
        setErrorMsg("")
      }
    })
  }

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      if (dateRange.settlement > dateRange.eviction) {
        return setErrorMsg("Діапазон дат не валідний!")
      }
      let intersects = false
      for (let i = 0; i < dates.length; i++) {
        Object.values(dateRange).forEach((item) => {
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
        settlement: dateRange.settlement,
        eviction: dateRange.eviction,
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
      setDateRange({
        settlement: "",
        eviction: "",
      })
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

  const fieldFilled =
    !errorMsg.length &&
    dateRange.settlement.length &&
    dateRange.eviction.length &&
    price.length
  return (
    <div className='wrapper'>
      <Title Icon={BsPlusSquare} title='Створити слот' />
      <div className='range-form'>
        <div className='range-form__tools'>
          <div className='range-form__btns'>
            <FieldDateRange onChangePicker={onChangePicker} />
            <Field
              disableError={true}
              exClass='range-form__price'
              field={{ title: "Ціна:", value: price, param: "price" }}
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
            {dates.map((date) => {
              return (
                <div
                  className={`slot ${date.booked && "slot--disabled"}`}
                  key={date._id}>
                  <span className='slot__settlement'>
                    {date.settlement.slice(0, 10)}
                  </span>
                  <BsArrowRight />
                  <span className='slot__eviction'>
                    {date.eviction.slice(0, 10)}
                  </span>
                  <span className='slot__price'>{date.price} &#8372;</span>
                  <button
                    className={`slot__btn-delete ${
                      date.booked && "slot__btn-delete--disabled"
                    }`}
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
