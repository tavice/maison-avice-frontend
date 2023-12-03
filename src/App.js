import "./App.css";
import { Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs"; TO DO

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";


//URL to connect to backend:
const URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home URL={URL}/>} />
        <Route path="/about-us" element={<AboutUs URL={URL} />} />
        <Route path="/portfolio" element={<Portfolio URL={URL}/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
