import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men'
import Women from '../Pages/Women'

const Allroutes = () => {
  return (
    <div>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/men' element = {<Men/>}/>
     <Route path='/women' element = {<Women/>}/>
     <Route path='/kids' element = {<Kids/>}/>
     </Routes>
    </div>
  )
}

export default Allroutes
