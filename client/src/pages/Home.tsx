import React from "react"
import "../styles/home.scss"
import { GiMountaintop } from "react-icons/gi"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import { BsKanban, BsChatSquareQuote } from "react-icons/bs"
import { TOGGLE_FORM_AUTH } from "../redux/types/popup"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
// @ts-ignore
import imageMain from "../images/photo_2020-11-24_01-43-26.jpg"

const Home: React.FC = () => {
  const history = useHistory()
  const {
    auth: { token },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const handleLinkTo = (path: string) => {
    history.push(path)
  }

  return (
    <div className='wrapper-home'>
      <div className='background-home'></div>
      <div className='wrapper'>
        <div className='info'>
          <div className='info__content'>
            <h1 className='logotype'>
              <GiMountaintop className='logotype__icon' />
              <span className='logotype__title'>Art-Village</span>
            </h1>
            <p className='info__paragraph'>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam
            </p>
            <div className='info__btns'>
              <Button
                exClass={"btn-primary"}
                Icon={BsKanban}
                click={() =>
                  token
                    ? handleLinkTo("/booking")
                    : dispatch({ type: TOGGLE_FORM_AUTH })
                }
                title='Бронюваня'
              />
              <Button
                exClass={"btn-simple"}
                Icon={BsChatSquareQuote}
                click={() => handleLinkTo("/responses")}
                title='Відгуки'
              />
            </div>
          </div>
          <div className='info__image'>
            <img className='info__thumbnail' src={imageMain} alt='imgMain' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
