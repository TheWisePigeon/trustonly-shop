import HomeScreen from "./Screens/HomeScreen"
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, } from 'react-router-dom'
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from './Screens/RegisterScreen'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={< RegisterScreen />} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App 
