import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

//import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
//import ContactUs from "./pages/ContactUs"; TO DO
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Import WIP page
import WIPPage from "./components/WIP/WIPPage";

//URL to connect to backend:
const URL = process.env.REACT_APP_API_URL;
const videoUrl = process.env.REACT_APP_VIDEO_URL;


function App() {
  const location = useLocation();

  // generate dynamic title based on the current location
  const generatePageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Maison Avice | Luxury Sustainable Architecture + Interior Design | San Francisco";
      case "/about-us":
        return "About Maison Avice - Leaders in Sustainable Luxury Design | San Francisco";

      case "/portfolio":
        return "Maison Avice Portfolio - Showcasing Luxury Sustainable Projects | San Francisco";

      case "/blog":
        return "Maison Avice Blog - Insights and Trends in Sustainable Luxury Design";

      default:
        return "Welcome to Maison Avice - Pioneering Sustainable Luxury Design";
    }
  };

  // Define a function to get the meta description based on the current location
  const getMetaDescription = () => {
    switch (location.pathname) {
      case "/":
        return "Maison Avice is a premier sustainable luxury Architecture + Interior Design firm in San Francisco, CA. Discover our eco-friendly designs and innovative solutions for your dream home.";
      case "/about-us":
        return "Learn about Maison Avice - a team of passionate professionals dedicated to sustainable architecture, interior design, and landscape design in San Francisco.";
      case "/portfolio":
        return "Explore Maison Avice's portfolio of stunning sustainable architectural projects in San Francisco, showcasing our commitment to design and sustainability.";
      case "/blog":
        return "Read Maison Avice's latest blog posts on sustainable architecture, interior design trends, and eco-friendly living in the San Francisco Bay Area.";
      default:
        return "Maison Avice is a sustainable luxury architectural design firm in San Francisco, CA. We specialize in sustainable architecture, interior design, and landscape design.";
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>{generatePageTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      <Header />

      <Routes>
        <Route path="/" element={<Home URL={URL} videoUrl={videoUrl}/>} />
        <Route path="/about-us" element={<AboutUs URL={URL} />} />
        <Route path="/portfolio" element={<Portfolio URL={URL} />} />
        <Route path="/blog" element={<Blog URL={URL} />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> TO DO */}
      </Routes>

      <Footer URL={URL} />
    </div>

    // <div className="App">
    // <Helmet>
    //   <title>{generatePageTitle()}</title>
    //   <meta name="description" content={getMetaDescription()} />
    // </Helmet>

    // <Routes>
    //   {/* WIP Redirect */}
    //   <Route path="/wip" element={<WIPPage />} />
    //   <Route path="*" element={<Navigate to="/wip" replace />} />
    // </Routes>

    //</div>
  );
}

export default App;
