import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/singup/SignUp'
import Users from './pages/users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Users />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
