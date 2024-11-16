
import './App.css'
 import Add from './Components/Add'
 import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
// import Update from './Components/Update'



function App() {
  

  return (
    <>
       <Routes>
        {/* http://localhost:5173/ */}
       
         <Route path='/' element={<Home/>} />
        <Route path='add' element={<Add/>} />
        {/* <Route path='update/:id' element={<Update/>} /> */}
      </Routes> 
      {/* <Home /> */}
      
    </>
  )
}

export default App
