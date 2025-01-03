import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "2mb" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Successfully connected to port ${PORT}`));

app.get("/", async (req, res) => {
  res.status(500).send("Server is RUNNING");
});
