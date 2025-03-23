import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import handleError from "./middlewares/middleware.js";
import userRouter from "./routes/userRoutes.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(handleError);

createUserTable();

server.use("/api", userRouter);

// Test pg connection
server.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`DB name is ${result.rows[0].current_database}`)
});

server.listen(process.env.PORT, () => {
    console.log(`server running`);
});