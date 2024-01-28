import React from 'react'
import "./Style.css"
import NavBar from "./NavBar"
import MainBanner from "./MainBanner"
import About from "./About"
import Fotter from './Fotter'

const App = () => {
  return (
    <div>
    <NavBar/>
    <MainBanner/>
    <About/>
    <Fotter/>
    </div>
  )
}

export default App