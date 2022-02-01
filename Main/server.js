const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static("public"));

app.use("/", require("./routes/index"));

app.use("/notes", require("./routes/notes"));

  app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

  























