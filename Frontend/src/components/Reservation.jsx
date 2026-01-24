import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
  e.preventDefault();

  try {
    // Change this line in your Reservation.jsx component
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/reservation/send", // Added /v1 and /send
      { firstName, lastName, email, phone, date, time },
      { headers: { "Content-Type": "application/json" } }
    );

    if (data.success) {
      toast.success(data.message || "Reservation Confirmed!");
      sessionStorage.setItem("reservationSuccess", "true");
      navigate("/success");
    }
  } catch (error) {
    console.error("Reservation Error:", error);
    toast.error(
      error.response?.data?.message || "Reservation Failed"
    );
  }
};

  return (
    <form onSubmit={handleReservation}>
      <input
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Reserve Now</button>
    </form>
  );
};

export default Reservation;
