const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(cookieParser());

// Route Import
const user = require('./routes/userRoutes');

app.use("/api/v1", user);


module.exports = app;