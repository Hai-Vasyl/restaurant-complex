import React, { useState, useEffect } from "react"
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
import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_CONFIRM_FORM } from "../redux/types/popup"
import { fetchDates } from "../redux/actions/dates"
import { RootStore } from "../redux/store"
import { UPDATE_DATE } from "../redux/types/dates"

const Booking: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const {
    dates: { dates, loading },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [initLoading, setInitLoading] = useState(true)
  const [selectedSort, setSelectedSort] = useState("settlement")
  const [sortBehaviour, setSortBehaviour] = useState(true)

  useEffect(() => {
    dispatch(fetchDates(hrComplex))
    setInitLoading(false)
  }, [dispatch, hrComplex])

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

    dispatch({ type: UPDATE_DATE, payload: [...dates].sort(compare) })
  }, [dispatch, selectedSort, sortBehaviour])

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value)
  }

  const handleBook = (id: string) => {
    const newDates = [...dates].map((date) => {
      if (date._id === id && !date.booked) {
        return { ...date, chosen: !date.chosen }
      }
      return date
    })

    dispatch({ type: UPDATE_DATE, payload: newDates })
  }

  const handleReset = () => {
    const newDates = [...dates].map((date) => {
      return { ...date, chosen: false }
    })
    dispatch({ type: UPDATE_DATE, payload: newDates })
  }

  const handleApply = () => {
    dispatch({ type: TOGGLE_CONFIRM_FORM })
  }

  const checkChanges = () => {
    let isChosen = false
    dates.forEach((date) => {
      if (date.chosen) {
        isChosen = true
      }
    })

    return isChosen
  }

  const selectOption = [
    { value: "settlement", title: "Дата" },
    { value: "price", title: "Ціна" },
    { value: "booked", title: "Доступні" },
  ]

  const isChosen = checkChanges()

  if (initLoading || loading) {
    return <div className='wrapper'>LOADING ...</div>
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
              exClass={`btn-primary ${!isChosen && "btn-disabled"}`}
              title='Застосувати'
              Icon={BsCheck}
              click={isChosen ? handleApply : () => {}}
            />
            <Button
              exClass={`btn-simple ${!isChosen && "btn-disabled"}`}
              title='Скинути'
              Icon={BsX}
              click={isChosen ? handleReset : () => {}}
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
