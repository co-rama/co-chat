const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  res.json({ message: "CoChat mobile is coming" });
});

app.listen(PORT, (error) => {
  if (error) {
    return;
  }
  console.log(`Chat Online PORT: ${PORT}`);
});
