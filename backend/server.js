// app.js or server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://akhileshprince1485:BDNRb5q8EM4mUQlZ@cluster0.pujfyfa.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
