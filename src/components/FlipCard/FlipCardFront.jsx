import React from 'react'
import guests from '../../db/guestList.json'

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {

      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const FlipCardFront = ({theme, params}) => {
  const guest = guests.find(guest => {

    if (guest.name.replaceAll(" ", "").toLowerCase() === params?.toLowerCase()) {
      return guest.parents
    }
    return undefined;
  })

  return (
    <div className="card front">
          <img className="card-img-top" src={theme} alt="Fairy Theme"/>
          <div className="card-body">
            {
              guest !== undefined
              ?
              (
                <h5 className="card-title sm:text-sm font-bold">Dear {titleCase(guest?.name)} and {guest?.parents}</h5>
              )
              :
              (
                <h5 className="card-title sm:text-sm font-bold">Dear friend, </h5>
              )
            }
            <p className="card-text text-sm md:text-base">It would be very nice of you to come to</p>
            <p className="card-text text-sm md:text-base font-bold">Alana's Birthday Party</p>
            <p className="card-text text-sm md:text-base">Date: <span>02/01/22</span> &nbsp; Time: <span>11:00 AM</span></p>
            <p className="card-text text-sm md:text-base">Place: <span>Chipmunks Playland & Cafe</span></p>
            <div className="card-text text-center text-sm italic">
              <p>Don't forget to bring your socks</p>
              <p>Valid for 1 child only</p>
              <p>Please be on time</p>
              <p>Don't forget to bring this invitation</p>
            </div>

          </div>
        </div>
  )
}

export default FlipCardFront
