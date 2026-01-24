import { Reservation } from "../models/reservationSchema.js";

export const createReservation = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const year = new Date(date).getFullYear();
    if (year < new Date().getFullYear()) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid future date",
      });
    }

    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
