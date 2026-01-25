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
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders";

/* Components */
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      {/* Global Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage />} />

        {/* Only keep the Protected versions */}
        <Route 
          path="/reservation" 
          element={
            <ProtectedRoute>
              <ReservationPage />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/order" 
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } 
        /><Route path="/myorders" element={<MyOrders />} />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
