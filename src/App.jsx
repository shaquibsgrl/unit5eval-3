
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Admin } from './Components/Admin'
import { EmployeeDetails } from './Components/EmployeeDetails'
import { EmployeeList } from './Components/EmployeeList'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Logout } from './Components/Logout'
import { Navbar } from './Components/Navbar'
import { ProtectedRoute } from './Components/PrivateRoute'

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/employees" element = {<EmployeeList/>}></Route>


        <Route path = "/employees/:id" element = {
          <ProtectedRoute>
            <EmployeeDetails/>
          </ProtectedRoute>
        }></Route>

        <Route path = "/admin" element = {
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }></Route>

        <Route path = "/" element = {<Logout></Logout>}></Route>
      </Routes>
    </div>
  )
}

export default App
