import express from "express";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import userRouter from "./routes/userRoute.js";
import reservationRoute from "./routes/reservationRoute.js"
import orderRoute from "./routes/orderRoute.js";

const app = express();


app.use(
  cors({
    origin: ["http://localhost:5173"], 
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", userRouter);
app.use("/api/v1/reservation", reservationRoute);
app.use("/api/v1/order", orderRoute);

// POST METHOD
/*app.post("/api/test", (req, res) => {
    const { name, email } = req.body;

    res.status(200).json({
        success: true,
        message: "POST request received",
        data: {
            name,
            email,
        },
    });
});
*/

app.use(errorMiddleware);

export default app;
