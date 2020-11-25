import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { http } from "../http"
import { IImage, IHRComplexInfo } from "../interfaces"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import ButtonArrow from "../components/ButtonArrow"
import { fetchImages } from "../redux/actions/images"
import { RootStore } from "../redux/store"
import "../styles/about.scss"

const About: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [initLoading, setInitLoading] = useState(true)
  const activeTabImage = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const {
    images: { images, loading, fetched },
  } = useSelector((state: RootStore) => state)
  const [hrComplexInfo, setHrComplexInfo] = useState<IHRComplexInfo>({
    title: "",
    location: "",
    description: "",
    food: "",
    servicesIncluded: "",
    entertainment: "",
    services: "",
    contacts: "",
    road: "",
  })
  const [imageActive, setImageActive] = useState<IImage>({
    _id: "",
    title: "",
    description: "",
    path: "",
    hrComplex: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchImages(hrComplex))
    }
    setInitLoading(false)
  }, [fetched, hrComplex, dispatch])

  useEffect(() => {
    activeTabImage.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }, [imageActive])

  useEffect(() => {
    if (images.length) {
      setImageActive(images[0])
    }
  }, [images])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/hrcomplex/get-info`,
          method: "post",
          data: {
            hrComplex,
          },
        })
        setHrComplexInfo(res.data)
      } catch (error) {
        setError(`Error fetching hrcomplex info: ${error.message}`)
      }
    }

    fetchData()
  }, [hrComplex, http])

  const handleMove = (isLeft: boolean) => {
    const index = images.indexOf(imageActive)
    const imagesCopy = [...images]

    let newImageActive
    if (isLeft) {
      if (index === 0) {
        newImageActive = imagesCopy[imagesCopy.length - 1]
      } else {
        newImageActive = imagesCopy[index - 1]
      }
    } else {
      if (index === imagesCopy.length - 1) {
        newImageActive = imagesCopy[0]
      } else {
        newImageActive = imagesCopy[index + 1]
      }
    }
    setImageActive(newImageActive)
  }

  const handleSetActiveImage = (image: IImage) => {
    setImageActive(image)
  }

  if (initLoading || loading) {
    return (
      <div className='wrapper'>
        <div>LOADING...</div>
      </div>
    )
  }
  if (error) {
    return (
      <div className='wrapper'>
        <div>Error happend: {error}</div>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className='slider'>
        <div className='slider__preview'>
          <ButtonArrow
            exClass={"btn-arrow-left"}
            Icon={BsChevronLeft}
            click={() => handleMove(true)}
          />
          <img
            src={imageActive.path}
            className='slider__img-preview'
            alt='img'
          />
          <ButtonArrow
            exClass={"btn-arrow-right"}
            Icon={BsChevronRight}
            click={() => handleMove(false)}
          />
        </div>
        <div className='slider__stack'>
          {images.map((img) => {
            return (
              <div
                onClick={() => handleSetActiveImage(img)}
                ref={imageActive._id === img._id ? activeTabImage : null}
                className={`image ${
                  imageActive._id === img._id && "image--active"
                }`}
                key={img.path}>
                <img src={img.path} className='image__thumbnail' alt='img' />
              </div>
            )
          })}
        </div>
      </div>
      <div className='img-info'>
        <h3 className='img-info__title'>{imageActive.title}</h3>
        <p className='img-info__paragraph'>{imageActive.description}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Розташування:</h3>
        <p className='section__paragraph'>{hrComplexInfo.location}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Опис:</h3>
        <p className='section__paragraph'>{hrComplexInfo.description}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Харчування:</h3>
        <p className='section__paragraph'>{hrComplexInfo.food}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Сервіс, включений у вартість:</h3>
        <p className='section__paragraph'>{hrComplexInfo.servicesIncluded}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Сервіс за додаткову оплату:</h3>
        <p className='section__paragraph'>{hrComplexInfo.services}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Спорт, розваги:</h3>
        <p className='section__paragraph'>{hrComplexInfo.entertainment}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Контакти:</h3>
        <p className='section__paragraph'>{hrComplexInfo.contacts}</p>
      </div>
      <div className='section'>
        <h3 className='section__title'>Як доїхати:</h3>
        <p className='section__paragraph'>{hrComplexInfo.road}</p>
      </div>
    </div>
  )
}

export default About
