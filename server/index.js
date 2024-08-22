const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
require("./db/conn");

// Define routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from the Backend!</h1>");
});

app.use("/api", projectRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
