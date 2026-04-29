


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Edit from '../pages/Edit'
import Delete from '../pages/Delete'
import Create from '../pages/Create'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/create' element={<Create/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes