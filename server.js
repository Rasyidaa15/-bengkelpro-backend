const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// =====================
// TEST ROUTE
// =====================
app.get("/", (req, res) => {
  res.send("API BengkelPro jalan 🚀")
})

// =====================
// DATABASE CONNECTION
// =====================
const db = mysql.createConnection(process.env.DATABASE_URL)

db.connect((err) => {
  if (err) {
    console.log("❌ DB ERROR:", err.message)
  } else {
    console.log("✅ DB CONNECTED")
  }
})

// =====================
// API ROUTE (TEST)
// =====================
app.get("/api", (req, res) => {
  res.json({
    status: "success",
    message: "API working",
    backend: "BengkelPro"
  })
})

// =====================
// CONTOH AMBIL DATA DARI DB
// (nanti kita pakai ini buat CRUD)
// =====================
app.get("/services", (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: err.message
      })
    }

    res.json({
      status: "success",
      data: result
    })
  })
})

// =====================
// RUN SERVER
// =====================
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("server jalan di port", PORT)
})