const express = require('express');

const app = express();
const PORT = 3001;

app.set("view engine", ".ejs");

app.use(express.static("public"));

app.use("/", require("./routes/index"));

  app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
























