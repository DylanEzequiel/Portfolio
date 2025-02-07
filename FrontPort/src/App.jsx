import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Home from './views/home/home'

function App() {

  return (
    <div className='bg-[#0e0f1f] bg-third_color min-w-screen min-h-screen'>
      {/* <NavBar /> */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      <Footer />
    </div>
  )
}

export default App
