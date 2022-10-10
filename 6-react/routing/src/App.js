import { 
  Routes,
  Route 
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer"

function App() {
  const author = "JayJay"

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <div className='Content'>
        <Footer author={author}/>
      </div>
    </div>
  );
}

export default App;
