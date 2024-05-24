import React from "react"
import Navbar from "./components/Navbar"
import Timer from "./components/Timer"
import Description from "./components/Description"

function App() {

  return (
    <div className="bg-main-color md:h-screen">
      <Navbar/>
      <div className="flex flex-col items-center md:justify-center">
        <Timer/>
        <Description/>
      </div>
    </div>
  )
}

export default App
