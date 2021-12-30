import React from "react"
import FlipCard from "../components/FlipCard/FlipCard"

const Home = () => {
  return (
    <div className="home">
      <h1 className="text-xl text-white font-bold text-center">💖 Happy birthday, <span style={{color: "rgb(255, 22, 209)"}}>Alana</span> ! 🎉</h1>
      <FlipCard />
      <h2 className="text-lg text-white font-bold text-center">Can't wait to see you there.</h2>
    </div>
  )
}

export default Home
