const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Contacts API");
});

app.get("/contacts", (req, res) => {
  const data = fs.readFileSync("data/contacts.json");
  const contacts = JSON.parse(data);
  res.json(contacts);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
