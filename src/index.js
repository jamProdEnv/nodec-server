import dotenv from "dotenv";
import { initDatabase } from "./db/init.js";
import { app } from "./app.js";
dotenv.config();


try {
    const PORT = process.env.PORT;
    await initDatabase();
    app.listen(PORT);
    console.info("Server Running: ", PORT);
} catch (error) {
    console.error("Could Not Start Application: ", error);
}