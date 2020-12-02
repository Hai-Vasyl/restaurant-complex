import React from "react"
import "../styles/loader.scss"

interface LoaderProps {
  action: boolean
}

const Loader: React.FC<LoaderProps> = ({ action }) => {
  return (
    <div className={`loader ${action && "loader--active"}`}>
      <div className='loader__spinner'></div>
    </div>
  )
}

export default Loader
