import React, {useState} from 'react'
import './FlipCard.scss'
import Theme from "../../assets/img/FairyTheme.png"
import Location from "../../assets/img/ChipmunksLocation.jpg"

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
            <p className="card-text text-sm md:text-base">Place: <span>Chipmunks Playland & Cafe</span></p>
            <div className="card-text text-center text-sm italic">
              <p>Don't forget to bring your socks</p>
              <p>Valid for 1 child only</p>
              <p>Please be on time</p>
              <p>Don't forget to bring this invitation</p>
            </div>

          </div>
        </div>
        <div className="card back">
        <img className="card-img-top" src={Location} alt="Chipmunks Location"/>
          <div className="card-body">
          <h5 className="card-title sm:text-sm font-semibold">Address: 3/1099 Western Hwy, Ravenhall VIC 3023</h5>
            <p className="card-text text-sm md:text-base">(Slip lane from Ballarat Rd, next to Total Tools and Fantastic Furniture)</p>
            <p className="card-text text-sm md:text-base font-bold">Menu</p>
            <div className="card-text text-sm italic">
              <p>Birthday Cake</p>
              <p>Chicken Nuggets, Spring Rolls, Chips, etc.</p>
              <p>03 Pizzas (included Vegetarian one)</p>
              <p>Fruit Platter</p>
              <br/>
              <p>*No outside food allowed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
