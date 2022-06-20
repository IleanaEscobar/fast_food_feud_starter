import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, handleClick}) {
  var buttonClassName = isActive? "chip active": "chip"
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
