import React from "react"
import "../styles/loader.scss"

interface LoaderProps {
  action: boolean
  exClass?: string
}

const Loader: React.FC<LoaderProps> = ({ action, exClass }) => {
  return (
    <div className={`loader ${exClass} ${action && "loader--active"}`}>
      <div className='loader__spinner'></div>
    </div>
  )
}

export default Loader
