import NavBar from "./Components/NavBar";
import "./App.css";
import Card from "./Components/Card";
import Movies from "./Data/Movies";
import CompA from "./Components/CompA";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog"
import MoviesPages from "./pages/MoviesPages"
import SignupForm from "./Components/SignupForm"
import LoginForm from "./Components/LoginForm"
function App() {
  return (
    <>
     

      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<SignupForm  />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>


{/* <CompA data ="this is data from component" /> */}

      {/* <div className="app-container">
        

        
      </div> */}
    </>
  );
}

export default App;
