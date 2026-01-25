import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodBowlImg from "../assets/foodbowl.png";
const Success = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔐 If user directly accesses /success → block it
    const allowed = sessionStorage.getItem("reservationSuccess") || 
                sessionStorage.getItem("registrationSuccess");
    if (!allowed) {
      navigate("/", { replace: true });
      return;
    }

    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);

          // ❌ Remove access after redirect
          sessionStorage.removeItem("reservationSuccess");

          navigate("/", { replace: true });
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <section
      className="success-page"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <img
        src={foodBowlImg}
        alt="success"
        style={{ width: "500px" }}
      />

      <h1>Registration Successful!</h1>
      <p>Welcome to the DineEase community.</p>

      <p>
        Redirecting to home in <strong>{count}</strong> seconds...
      </p>

      <Link
        to="/"
        onClick={() => sessionStorage.removeItem("reservationSuccess")}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Go to Home Now
      </Link>
    </section>
  );
};

export default Success;
