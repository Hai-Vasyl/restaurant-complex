import React, { useState, useEffect } from "react"
import axios from "axios"
import { http } from "../http"
import { IDateRange } from "../interfaces"
// @ts-ignore
import bgImage from "../images/undraw_updates_et2k.svg"
import {
  BsKanban,
  BsArrowRight,
  BsX,
  BsCheck,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs"
import Title from "../components/Title"
import SortField from "../components/SortField"
import Button from "../components/Button"
import "../styles/booking.scss"

const Booking: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [initLoading, setInitLoading] = useState(true)
  const [dates, setDates] = useState<IDateRange[]>([])
  const [selectedSort, setSelectedSort] = useState("settlement")
  const [sortBehaviour, setSortBehaviour] = useState(true)
  const [errorFetch, setErrorFetch] = useState("")

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

  useEffect(() => {
    const compare = (firstItem: any, secondItem: any) => {
      const item1 = firstItem[selectedSort]
      const item2 = secondItem[selectedSort]
      if (item1 > item2) {
        return sortBehaviour ? 1 : -1
      } else if (item1 < item2) {
        return sortBehaviour ? -1 : 1
      } else {
        return 0
      }
    }

    setDates((prevDates) => [...prevDates].sort(compare))
  }, [selectedSort, sortBehaviour])

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value)
  }

  const handleBook = (id: string) => {
    setDates((prevDates) =>
      prevDates.map((date) => {
        if (date._id === id && !date.booked) {
          return { ...date, chosen: !date.chosen }
        }
        return date
      })
    )
  }

  const handleReset = () => {
    setDates((prevDates) =>
      prevDates.map((date) => {
        return { ...date, chosen: false }
      })
    )
  }

  const handleApply = () => {
    console.log("apply")
  }

  const selectOption = [
    { value: "settlement", title: "Дата" },
    { value: "price", title: "Ціна" },
    { value: "booked", title: "Доступні" },
  ]

  if (initLoading) {
    return <div className='wrapper'>LOADING ...</div>
  }
  if (errorFetch.length) {
    return <div className='wrapper'>Error happend: {errorFetch}</div>
  }
  return (
    <div className='wrapper'>
      <Title Icon={BsKanban} title='Бронювання' />
      <div className='range-form'>
        <div className='range-form__tools'>
          <div className='range-form__sort'>
            <button
              className='sort-chevron'
              onClick={() => setSortBehaviour(!sortBehaviour)}>
              {sortBehaviour ? <BsChevronUp /> : <BsChevronDown />}
            </button>
            <SortField
              title='Сортувати за:'
              options={selectOption}
              selectedValue={selectedSort}
              handleChangeSelect={handleChangeSelect}
            />
          </div>
          <div className='range-form__dates'>
            {dates.map((date) => {
              return (
                <button
                  className={`slot-btn ${date.chosen && "slot-btn--chosen"} ${
                    date.booked && "slot-btn--booked"
                  }`}
                  key={date._id}
                  onClick={() => handleBook(date._id)}>
                  <span
                    className={`slot-btn__check ${
                      date.chosen && "slot-btn__check--checked"
                    }`}>
                    <BsCheck />
                  </span>
                  <span className='slot-btn__settlement'>
                    {date.settlement.slice(0, 10)}
                  </span>
                  <BsArrowRight className='slot-btn__arrow-right' />
                  <span className='slot-btn__eviction'>
                    {date.eviction.slice(0, 10)}
                  </span>
                  <span className='slot-btn__price'>
                    {date.price}{" "}
                    <span className='slot-btn__grivna-sign'>&#8372;</span>
                  </span>
                </button>
              )
            })}
          </div>
          <div className='range-form__btns-main'>
            <Button
              exClass='btn-primary'
              title='Застосувати'
              Icon={BsCheck}
              click={handleApply}
            />
            <Button
              exClass='btn-simple'
              title='Скинути'
              Icon={BsX}
              click={handleReset}
            />
          </div>
        </div>

        <div className='range-form__bg-img'>
          <img src={bgImage} className='range-form__img' alt='bgImg' />
        </div>
      </div>
    </div>
  )
}

export default Booking
