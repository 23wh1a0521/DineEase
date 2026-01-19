import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// When a POST request hits "/send", run the sendReservation function
router.post("/send", sendReservation);

export default router;