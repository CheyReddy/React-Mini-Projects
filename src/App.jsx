import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import ImageGallery from './components/ImageGallery'
import Accordion from './components/Accordion'
import RandomNumberGenerator from './components/RandomNumberGenerator'
import TelephoneFormatter from './components/TelephoneFormatter'
import StringTransformers from './components/StringTransformers'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/random-number-generator' element={<RandomNumberGenerator />} />
        <Route path='/telephone-formatter' element={<TelephoneFormatter />} />
        <Route path='/string-transformers' element={<StringTransformers />} />
      </Routes>
        
    </>
  )
}

export default App
