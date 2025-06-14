const express = require("express");
const app = express();

// Simple root route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
