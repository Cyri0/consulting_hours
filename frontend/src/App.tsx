// import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Routes
  //Link
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  return (
    <Router>
      <nav>This gonna be navbar</nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App