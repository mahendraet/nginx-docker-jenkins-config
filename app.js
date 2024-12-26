const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.dir("env", process.env);
  res.send("Hello, World 3");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
