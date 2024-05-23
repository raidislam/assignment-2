import cors from "cors";
import express from "express";
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
