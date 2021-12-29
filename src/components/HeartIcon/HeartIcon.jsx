import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import './HeartIcon.scss'

function useTimeout(callback, delay) {
  const savedCallback = useRef(callback)

  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => savedCallback.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
} // useTimeout custom hook

const HeartIcon = ({handleClick}) => {
  const [openHeart, setOpenHeart] = useState(false)

  const handleHeartIcon = () => {
    setOpenHeart(!openHeart)
    handleClick()
  }

  useTimeout(handleHeartIcon, 800)

  return (
    <div className="wrapper">
      {/* eslint-disable-next-line */}
      <a href="#" id="heart" onClick={handleHeartIcon} className={openHeart ? "radiate" : ""}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="0.5in" height="0.4575in" viewBox="0 0 109.46 100.19">
          <path className="heart" d="M55.9,82.26s-39.14-26.38-28-43.72c9.75-15.18,28,5,28,5h0s17.76-18.79,28-5C96.12,55.08,55.9,82.26,55.9,82.26Z" />
          <line id="line-7" className="line" x1="91.45" y1="39.14" x2="98.36" y2="38.41" />
          <line id="line-6" className="line" x1="86.27" y1="28.87" x2="89.02" y2="24.51" />
          <line id="line-5" className="line" x1="73.2" y1="24.33" x2="74.34" y2="18.36" />
          <line id="line-4" className="line" x1="56.77" y1="25.85" x2="56.77" y2="21.09" />
          <line id="line-3" className="line" x1="38.72" y1="23.9" x2="37.57" y2="17.93" />
          <line id="line-2" className="line" x1="25.73" y1="26.41" x2="22.95" y2="22.05" />
          <line id="line-1" className="line" x1="18.07" y1="37.81" x2="11.1" y2="37.07" />
        </svg>
      </a>
    </div>
  )
}

export default HeartIcon
