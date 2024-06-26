import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import AboutMe from './views/aboutMe/aboutMe'
import Home from './views/home/home'

function App() {

  return (
    <div className='bg-third_color min-w-screen min-h-screen'>
     
      <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<AboutMe />}></Route>
          </Routes>
      <Footer />
    </div>
  )
}

export default App
