// app.js

const express = require('express');

const app = express();

app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

module.exports = app;