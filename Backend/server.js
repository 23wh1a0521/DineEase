import dotenv from "dotenv";
import app from "../../test/app.js";
import dbConnection from "./database/database.js";

dotenv.config({ path: "./config/config.env" });

dbConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});
