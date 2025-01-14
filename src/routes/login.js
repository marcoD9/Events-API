const express = require("express");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const userData = JSON.parse(jsonData);

  const secretKey = process.env.AUTH_SECRET_KEY || "my-secret-key";
  const { username, password } = req.body;
  const { users } = userData;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  const token = jwt.sign({ userId: user.id }, secretKey);
  res.status(200).json({ message: "Successfully logged in!", token });
});

module.exports = router;
