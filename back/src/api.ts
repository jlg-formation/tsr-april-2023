import express from "express";
const app = express.Router();

app.get("/config", (req, res) => {
  res.json({
    samples: 34,
    multiplicationFactor: 12,
  });
});

export default app;
