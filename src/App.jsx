import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Auth></Auth>} ></Route>
        <Route path='/register' element={<Auth insideRegister></Auth>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/project' element={<Project></Project>} ></Route>
        <Route path='/*' element={<Navigate to={'/'}></Navigate>} ></Route>
      </Routes>
      <Footer></Footer>
       
    </>
  )
}

export default App
