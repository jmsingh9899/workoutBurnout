const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');
const path = require('path');

const PORT = process.env.PORT || 3000;

const db = require("./model");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))
})
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))
})
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});