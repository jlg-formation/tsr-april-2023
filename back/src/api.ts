import express from "express";
const app = express.Router();

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

app.get("/config", (req, res) => {
  res.json({
    samples: rand(0, 100),
    multiplicationFactor: rand(0, 100),
  });
});

export default app;
