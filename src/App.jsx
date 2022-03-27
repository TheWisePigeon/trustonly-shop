import HomeScreen from "./Screens/HomeScreen"
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import ProductScreen from "./Screens/ProductScreen"
import CheckoutScreen from "./Screens/CheckoutScreen"

function App() {


  return (
    <Routes>
      <Route path="/" element={ <HomeScreen/> } />
      <Route path="/product:id" element={ <ProductScreen/> } />
      <Route path="/checkout"  element={ <CheckoutScreen/> } />
    </Routes>
  )
}

export default App 
