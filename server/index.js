const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from the Backend!</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
