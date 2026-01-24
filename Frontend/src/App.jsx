import "./App.css"; // This line MUST be present
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* Pages */
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from './pages/Login';
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import MenuPage from "./pages/Menu";
import ReservationPage from "./pages/Reservation";


/* Components */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Qualities from "./components/Qualities";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Reservation from "./components/Reservation";
import About from "./components/About";
import WhoAreWe from "./components/WhoAreWe";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      {/* Global Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        {/* Replace the existing Home Page Route block in App.jsx */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />


        {/* Protected Success Page */}
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/reservation" 
          element={
            <ProtectedRoute>
            <Reservation />
            </ProtectedRoute>
          } 
        />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
