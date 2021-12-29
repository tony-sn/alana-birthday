import React, { useState } from 'react'
import classes from "./Header.module.scss"
import { Link } from 'react-router-dom'

import HeartIcon from '../HeartIcon/HeartIcon'
import AlanaLogo from '../../assets/img/AlanaNguyenLogo.png'


// import {BiMenuAltRight} from 'react-icons/bi'
// import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  function handleMenuToggler () {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Link to="/" className={classes.balloon}>
        🎂🎈🎁🌟
        <img className="alana__img" src={AlanaLogo} alt="Alana Logo"/>
      </Link>

     <header className={classes.header}>
      <div className={classes.header__content}>

      <nav className={`${classes.header__content__nav} ${menuOpen? classes.isMenu : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-albums">My Albums</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.header__content__toggle}>
        {/* {menuOpen ? <BiMenuAltRight onClick={handleMenuToggler}/> : <AiOutlineClose onClick={handleMenuToggler}/>} */}

        < HeartIcon handleClick={handleMenuToggler} />

      </div>
      </div>

    </header>

    </>

  )
}

export default Header
