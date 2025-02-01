import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer"
import Home from "./Component/Home"
import NavBar from "./Component/NavBar"
import Preloader from "./Component/PreLoader"
import Service from "./Component/Service"
import PortfolioSection from "./Component/Projects";
import ContactSection from "./Component/Contact";
import AboutSection from "./Component/About";


function App() {
 

  return (
    <>
    <Router>
    <Preloader/>
     <NavBar/>
     
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/Service" element={ <Service/>} />
    <Route path="/Projects" element={ <PortfolioSection/>} />
    <Route path="/Contact" element={ <ContactSection/>} />
    <Route path="/About" element={ <AboutSection/>} />

    </Routes>
     <Footer/>
    </Router>
    </>
  )
}

export default App
