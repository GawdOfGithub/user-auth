
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SignIn from './app/features/auth/Login'
import Register from './app/features/auth/Register'
export default function App() {
  return (
    <>
    <div><Navbar/></div>
    <div><SignIn/></div>
    <div><Sidebar/></div>
    </>
  )
}
