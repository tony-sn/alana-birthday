import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import './FlipCard.scss'
import Theme from "../../assets/img/FairyTheme.png"
import Location from "../../assets/img/ChipmunksLocation.jpg"
import FlipCardBack from './FlipCardBack'
import FlipCardFront from './FlipCardFront'

function FlipCard() {
  const [showBack, setShowBack] = useState(false)
  const { name } = useParams();

  function handleClick() {
    setShowBack(!showBack)
  }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div className={`flip-card-inner ${showBack ? "showBack" : ""}`}>
      <FlipCardFront theme={Theme} params={name} />

      <FlipCardBack location={Location} />
      </div>
    </div>
  )
}

export default FlipCard
