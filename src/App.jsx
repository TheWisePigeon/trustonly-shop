
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./Screens/HomeScreen"

function App() {


  return (
    <div>
      <Header></Header>
      <main className=" bg-white ">
        <h1 className=" font-mono text-center">Browse our latest articles</h1>
          <HomeScreen></HomeScreen>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App 
