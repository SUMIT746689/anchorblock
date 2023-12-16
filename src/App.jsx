import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/singup/SignUp'
import Users from './pages/users/Users'
import Error from './pages/errors/Errors'
import PrivateRoutes from './utils/PrivateRoutes'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
          </Route>

          <Route path='/login' element={<SignIn />} />
          <Route path='/registration' element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
