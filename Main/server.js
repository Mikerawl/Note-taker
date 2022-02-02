const express = require('express');
const {engine} = require('express-handlebars');
const path = require ("path");

const app = express();
const PORT = 3001;


app.engine('.hbs', engine({extname:'.hbs'}));
app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname,(views)))

app.use(express.static("public"));

const indexRouter = require('./routes/index')
const notesRouter = require('./routes/notes')

app.use("/", indexRouter);
app.use("/notes", notesRouter);

  app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

  























