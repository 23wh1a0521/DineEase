import express from "express";
import { createReservation } from "../controller/reservation.js";

const router = express.Router();

// Change "/reservation" to "/send"
router.post("/send", createReservation);

export default router;
