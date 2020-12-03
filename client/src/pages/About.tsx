import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { http } from "../http"
import { IImage } from "../interfaces"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import ButtonArrow from "../components/ButtonArrow"
import { fetchImages } from "../redux/actions/images"
import { RootStore } from "../redux/store"
// @ts-ignore
import sectionImgLocation from "../images/undraw_map_1r69.svg"
// @ts-ignore
import sectionImgDescription from "../images/undraw_art_0tat.svg"
// @ts-ignore
import sectionImgFood from "../images/undraw_breakfast_psiw.svg"
// @ts-ignore
import sectionImgServicesIncluded from "../images/undraw_cabin_hkfr.svg"
// @ts-ignore
import sectionImgEntertainment from "../images/undraw_hiking_d24r.svg"
// @ts-ignore
import sectionImgServices from "../images/undraw_Profile_data_re_v81r.svg"
// @ts-ignore
import sectionImgContacts from "../images/undraw_contact_us_15o2.svg"
// @ts-ignore
import sectionImgRoad from "../images/undraw_navigator_a479.svg"
import MainLoader from "../components/MainLoader"
import Loader from "../components/Loader"
import "../styles/about.scss"

const About: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const [initLoading, setInitLoading] = useState(true)
  const [hrComplexLoad, setHrComplexLoad] = useState(true)
  const activeTabImage = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const {
    images: { images, loading, fetched },
  } = useSelector((state: RootStore) => state)
  const [imageActive, setImageActive] = useState<IImage>({
    _id: "",
    title: "",
    description: "",
    path: "",
    hrComplex: "",
  })
  const [error, setError] = useState("")
  const [sections, setSections] = useState([
    {
      info: "",
      title: "Розташування",
      image: sectionImgLocation,
      param: "location",
    },
    {
      info: "",
      title: "Опис",
      image: sectionImgDescription,
      param: "description",
    },
    { info: "", title: "Харчування", image: sectionImgFood, param: "food" },
    {
      info: "",
      title: "Сервіс, включений у вартість",
      image: sectionImgServicesIncluded,
      param: "servicesIncluded",
    },
    {
      info: "",
      title: "Спорт, розваги",
      image: sectionImgEntertainment,
      param: "entertainment",
    },
    {
      info: "",
      title: "Сервіс за додаткову оплату",
      image: sectionImgServices,
      param: "services",
    },
    {
      info: "",
      title: "Контакти",
      image: sectionImgContacts,
      param: "contacts",
    },
    {
      info: "",
      title: "Як доїхати",
      image: sectionImgRoad,
      param: "road",
    },
  ])

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

        setSections((prevSections) =>
          prevSections.map((section) => {
            let newSection = section.info
            Object.keys(res.data).map((key) => {
              if (key === section.param) {
                newSection = res.data[key]
              }
            })
            return { ...section, info: newSection }
          })
        )
        setHrComplexLoad(false)
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

  const sectionsJSX = sections.map((section) => {
    return (
      <div className='section' key={section.param}>
        <div className='section__left-side'>
          <img className='section__img' src={section.image} alt='sectionImg' />
        </div>
        <div className='section__right-side'>
          <h3 className='section__title'>{section.title}:</h3>
          <p className='section__paragraph'>{section.info}</p>
        </div>
      </div>
    )
  })

  if (initLoading || loading) {
    return (
      <div className='wrapper'>
        <MainLoader />
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
        <div className='slider__stack stack-scroll'>
          <Loader action={hrComplexLoad} exClass='slider__stack-loader' />
          {images.map((img) => {
            return (
              <div
                onClick={() => handleSetActiveImage(img)}
                ref={imageActive._id === img._id ? activeTabImage : null}
                className={`image ${
                  imageActive._id === img._id && "image--active"
                }`}
                key={img.path}
              >
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
      {sectionsJSX}
    </div>
  )
}

export default About
