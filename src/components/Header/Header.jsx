import React from 'react'
import classes from "./Header.module.scss"
import { Link } from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/">
          <h2>Alana Logo</h2>
          {/* <img src={AlanaLogo} alt="Alana Logo"/> */}
        </Link>
      </div>
      <nav className={classes.header__content__nav}>
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
        <BiMenuAltRight/>

      </div>
    </header>
  )
}

export default Header
