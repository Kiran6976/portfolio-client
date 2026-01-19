import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AdminRoute from "./admin/AdminRoute";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
