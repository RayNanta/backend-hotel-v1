import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CariKamar, DetailPemesanan, DetailTipeKamar, LandingPage, Login, Riwayat } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login/>} /> 
        <Route path="/home" exact element={<LandingPage/>} /> 
        <Route path="/cariKamar" exact element={<CariKamar/>} /> 
        <Route path="/riwayat" exact element={<Riwayat/>} /> 
        <Route path="/detail" exact element={<DetailPemesanan/>} /> 
        <Route path="/detailKamar" exact element={<DetailTipeKamar/>} /> 
      </Routes>
    </Router>
  )
}

export default App