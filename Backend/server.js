import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import app from "./app.js";
import dbConnection from "./database/database.js";


dbConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});
