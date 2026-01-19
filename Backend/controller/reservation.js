import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // 1. Basic check: Are any fields missing?
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill out the full reservation form!", 400));
  }

  try {
    // 2. Attempt to create the reservation in MongoDB
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    // 3. Send success response
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // 4. Handle Mongoose Validation Errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    // Pass any other errors to the error middleware
    return next(error);
  }
};