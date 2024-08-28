import Aprops from "./pages/Aprops";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} /> {/*creating route for the home page */}
                <Route path="/props" element={<Aprops />} />{/*route for the Aprops page */}
            </Routes>
        </Router>
  )
}

export default App
