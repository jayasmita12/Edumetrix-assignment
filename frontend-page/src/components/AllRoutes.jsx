import React from 'react'
import {Routes,Route} from "react-router-dom"
import { AgentProfile } from './AgentProfile'
import { Navbar } from './Navbar'
import { Status } from './Status'
import { StudentData } from './StudentData'

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
    <Routes>
        <Route path="/" element={<AgentProfile/>}></Route>
        <Route path="/student-data"element={<StudentData/>}></Route>
        <Route path="/status" element={<Status/>}></Route>
    </Routes>
    </div>
  )
}
