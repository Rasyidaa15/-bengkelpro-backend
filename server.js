app.get("/api", (req, res) => {
  res.json({
    status: "ok",
    message: "backend sudah connect",
    data: [
      { id: 1, name: "Service Motor" },
      { id: 2, name: "Ganti Oli" },
      { id: 3, name: "Tune Up" }
    ]
  })
})