import express from "express";

import dotenv from "dotenv";

// Load env vars

const result = dotenv.config({
  path: "config/config.env",
});
if (result.error) {
  throw result.error;
}

console.log(result.parsed);

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
