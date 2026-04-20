const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB (IMPORTANT: use service name 'mongo')
mongoose.connect("mongodb://mongo:27017/test")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("App + MongoDB running!");
});

app.listen(3000, () => console.log("Server running"));