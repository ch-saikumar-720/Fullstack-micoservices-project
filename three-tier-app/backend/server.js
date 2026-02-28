const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Read database config from environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

// Connect and ensure table exists
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }

  console.log("Connected to MySQL:", process.env.DB_HOST);

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `;

  db.execute(createTableQuery, err => {
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

  const insertQuery =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.execute(insertQuery, [name, email, password], (err) => {

    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "User registered successfully!" });

  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
