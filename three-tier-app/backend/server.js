const express = require("express");
const mysql = require("mysql2");

const cors = require("cors");

const app = express();

// CORS for testing
app.use(cors({ origin: "*" }));
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "eks-public-cluster-db.c8t0coq4ejj9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Password123!",
  database: "mydatabase"
});

// Connect and ensure table exists
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // stop app if DB connection fails
  } 
  console.log("Connected to MySQL");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `;

  db.execute(createTableQuery, (err) => {
    if (err) {
      console.error("Failed to create users table:", err);
      process.exit(1);
    }
    console.log("Users table is ready.");
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Register route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.execute(insertQuery, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "User registered successfully!" });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
