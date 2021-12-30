import React from 'react'

const FlipCardBack = ({location}) => {
  return (
    <div className="card back">
    <img className="card-img-top" src={location} alt="Chipmunks Location"/>
      <div className="card-body">
      <h5 className="card-title sm:text-sm font-semibold">Address: 3/1099 Western Hwy, Ravenhall VIC 3023</h5>
        <p className="card-text text-sm md:text-base">(Use slip lane from Ballarat Rd; next to Total Tools and Fantastic Furniture)</p>
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
  )
}

export default FlipCardBack
