import React, { useEffect, useState } from "react"
import axios from "axios"
import { http } from "../http"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { IOrder } from "../interfaces"
import Title from "../components/Title"
import { BsCardChecklist, BsArrowRight } from "react-icons/bs"
import { GiMountaintop } from "react-icons/gi"
import "../styles/orders.scss"

const Orders: React.FC = () => {
  const {
    auth: { token },
  } = useSelector((state: RootStore) => state)
  const [initLoading, setInitLoading] = useState(true)
  const [orders, setOrders] = useState<IOrder[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/daterange/ordered`,
          method: "post",
          headers: token && {
            Authorization: `Basic ${token}`,
          },
        })
        setInitLoading(false)
        setOrders(res.data)
      } catch (error) {}
    }

    fetchData()
  }, [http])

  if (initLoading) {
    return <div className='wrapper'>LOADING ...</div>
  }
  return (
    <div className='wrapper'>
      <Title Icon={BsCardChecklist} title='Замовлено' />
      <div className='orders'>
        {orders.map((item) => {
          return (
            <div className='order' key={item.settlement}>
              <GiMountaintop className='order__logotype' />
              <div className='order__wrapper'>
                <div className='order__date-range'>
                  <span className='order__date'>
                    Поселення: <span>{item.settlement.slice(0, 10)}</span>
                  </span>
                  <BsArrowRight />
                  <span className='order__date'>
                    Виселення: <span>{item.eviction.slice(0, 10)}</span>
                  </span>
                </div>
                <div className='order__info'>
                  <div className='order__price'>
                    Ціна: <span>{item.price}</span> &#8372;
                  </div>
                  <div className='order__created'>
                    Замовлено: <span>{item.date.slice(0, 10)}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders
