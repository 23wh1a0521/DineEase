import Reservation from "../components/Reservation";

const ReservationPage = () => {
  return (
    <section className="reservation-page">
      <div className="reservation-container">
        <h2>Book a Table</h2>
        <div className="reservation-card">
          <Reservation />
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;