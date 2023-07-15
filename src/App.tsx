import './App.css'
import Navbar from './components/navbar/navbar'
import Fruits from './containers/fruits-display'
import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Navbar />
    
    <Outlet />
    
    {/* <Fruits /> */}
    </>
  )
}

export default App
