import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/singup/SignUp'
import Users from './pages/users/Users'
import Error from './pages/errors/Errors'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/registration' element={<SignUp />} />
          <Route path='/dashboard' element={<Users />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
