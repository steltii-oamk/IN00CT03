import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./Routing/Home"
import About from "./Routing/About"
import ContactUs from "./Routing/ContactUs"
import NotFound from "./Routing/NotFound"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  const author = "Juhani Koski"

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer author={author} />
    </div>
  );
}

export default App;