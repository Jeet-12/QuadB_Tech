// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import BookPage from './component/BookPage.jsx'
import BookNowPage from './component/BookNowPage.jsx'
import NotFoundPage from './component/NotFoundPage.jsx'
import Summary from './component/Summary.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book' element={<BookPage/>}/>
      <Route path='/booking' element={<BookNowPage/>}/>
      <Route path='/summary/:sum' element={<Summary/>}/>
      <Route path='*' element={<NotFoundPage />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
