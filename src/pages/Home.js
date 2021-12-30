import React from "react"
import FlipCard from "../components/FlipCard/FlipCard"

const Home = () => {
  return (
    <div className="home">
      <h1 className="text-xl text-white font-bold text-center">💖 Happy birthday, <span style={{color: "rgb(255, 22, 209)"}}>Alana</span> ! 🎉</h1>
      <FlipCard />
      <h3 className="text-base text-white text-center mt-9">Made by Alana's dad with love ❤️</h3>
    </div>
  )
}

export default Home
