import HomeScreen from "./Screens/HomeScreen"
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, } from 'react-router-dom'
import LoginScreen from "./Screens/LoginScreen"

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App 
