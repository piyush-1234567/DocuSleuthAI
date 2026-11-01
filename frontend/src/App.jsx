
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/login/login";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
