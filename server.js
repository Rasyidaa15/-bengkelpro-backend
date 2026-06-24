const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API BENAR SUDAH JALAN")
})

app.get("/api", (req, res) => {
  res.json({
    status: "success",
    message: "API working"
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("server jalan di port", PORT)
})