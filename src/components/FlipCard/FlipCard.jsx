import React, {useState} from 'react'
import './FlipCard.scss'
import Theme from "../../assets/img/FairyTheme.png"

function FlipCard() {
  const [showBack, setShowBack] = useState(false)

  function handleClick() {
    setShowBack(!showBack)
  }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div className={`flip-card-inner ${showBack ? "showBack" : ""}`}>
        <div className="card front">
          <img className="card-img-top" src={Theme} alt="Fairy Theme"/>
          <div className="card-body">
            <h5 className="card-title sm:text-sm font-bold">Dear Nam and Mum Lan & Dad Tri</h5>
            <p className="card-text text-sm md:text-base">It would be very nice of you to come to</p>
            <p className="card-text text-sm md:text-base font-bold">Alana's Birthday Party</p>
            <p className="card-text text-sm md:text-base">Date: <span>02/01/22</span> &nbsp; Time: <span>11:45 AM</span></p>
            <p className="card-text text-sm md:text-base">Place: <span>Chipmunks Playland</span></p>
            <div className="card-text text-center text-sm italic">
              <p>Don't forget to bring your socks</p>
              <p>Valid for 1 child only</p>
              <p>Please be on time</p>
              <p>Don't forget to bring this invitation</p>
            </div>

          </div>
        </div>
        <div className="card back">
          <div className="card-body">
            <p className="card-text text-lg font-bold">Back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
