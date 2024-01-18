import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Otp from './components/Otp'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/otp' element={<Otp></Otp>} />
      </Routes>
    </div>
  )
}

export default App
