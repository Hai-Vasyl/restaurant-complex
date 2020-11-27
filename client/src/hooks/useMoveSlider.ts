import React from "react"
import { IImage } from "../interfaces"

interface IHandleMoveProps {
  (
    imageActive: IImage,
    images: IImage[],
    isLeft: boolean,
    setImageActive: (value: React.SetStateAction<IImage>) => void
  )
}

const useMoveSlider = () => {
  const handleMove: IHandleMoveProps = (
    imageActive,
    images,
    isLeft,
    setImageActive
  ) => {
    const index = images.indexOf(imageActive)
    const imagesCopy = [...images]

    let newImageActive: IImage
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
  return { handleMove }
}

export default useMoveSlider
