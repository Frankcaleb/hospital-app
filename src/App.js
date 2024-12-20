import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./components/appointment";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Plans from "./components/plans";
import Services from "./components/services";




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </Router>
      <Banner />
      <Hero />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
