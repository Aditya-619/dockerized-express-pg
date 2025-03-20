import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

// Test pg connection
server.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`DB name is ${result.rows[0].current_database}`)
})

server.listen(process.env.PORT, () => {
    console.log(`server running`);
});