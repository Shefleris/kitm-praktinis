const express = require('express');
const morgan = require('morgan');

const app = express();

//Routes
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

app.use(express.json())
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
};

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/questions', questionRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/comments', commentsRoutes);


module.exports = app;