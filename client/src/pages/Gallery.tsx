import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { fetchImages } from "../redux/actions/images"
import { IImage } from "../interfaces"
import { TOGGLE_POPUP_IMG } from "../redux/types/popup"
import ButtonArrow from "../components/ButtonArrow"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import "../styles/gallery.scss"

const Gallery: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const {
    images: { images, fetched, loading },
    popup: { popupImg },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [initLoading, setInitLoading] = useState(true)
  const [activeImage, setActiveImage] = useState<IImage>({
    _id: "",
    title: "",
    description: "",
    path: "",
    hrComplex: "",
  })

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchImages(hrComplex))
    }
    setInitLoading(false)
  }, [dispatch, hrComplex, fetched])

  const handlePopup = (imageData: IImage) => {
    setActiveImage(imageData)
    dispatch({ type: TOGGLE_POPUP_IMG })
  }

  if (initLoading || loading) {
    return <div className='wrapper'>Loading ...</div>
  }
  return (
    <div className='wrapper'>
      {/* <h3>Gallery page</div> */}
      <div className={`img-popup ${popupImg && "img-popup--active"}`}>
        <ButtonArrow
          exClass='img-popup__arrow arrow-left'
          Icon={BsArrowLeft}
          click={() => console.log("qwe")}
        />
        <div className='img-popup__wrapper'>
          <div className='img-popup__preview'>
            <img
              className='img-popup__img'
              src={activeImage.path}
              alt='imgActive'
            />
          </div>
          <div className='img-popup__info'>
            <h4 className='img-popup__title'>{activeImage.title}</h4>
            <p className='img-popup__paragraph'>{activeImage.description}</p>
          </div>
        </div>
        <ButtonArrow
          exClass='img-popup__arrow arrow-right'
          Icon={BsArrowRight}
          click={() => console.log("qwe")}
        />
      </div>

      <div className='gallery'>
        {images.map((img) => {
          return (
            <div
              className='gallery-img'
              key={img.path}
              onClick={() => handlePopup(img)}>
              <img
                className='gallery-img__thumbnail'
                src={img.path}
                alt='img'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
