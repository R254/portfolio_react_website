import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Home, About, Portfolio, Contact, Login} from "./components"

const App = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/about' element={ <About /> }/>
      <Route path='/portfolio' element={ <Portfolio /> }/>
      <Route path='/contact' element={ <Contact /> }/>
      <Route path="/login" element = { <Login /> } />
    </Routes>
  </BrowserRouter>
  )
}

export default App