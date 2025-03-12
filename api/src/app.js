const express = require('express');
const morgan = require('morgan');

const app = express();

//Routes
const authRoutes = require('./routes/authRoutes');


app.use(express.json())
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
};

app.use('/api/v1/auth', authRoutes);


module.exports = app;