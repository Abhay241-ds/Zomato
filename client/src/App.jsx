import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import FourOFour from './pages/FourOFour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={AdminLogin} />
          <Route path='/dashboard' Component={AdminDashboard}/>
          <Route path='/*' Component={FourOFour}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App