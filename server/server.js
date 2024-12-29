// step1
const express = require('express');
const app = express();
const morgan = require('morgan');
const todoRouter = require('./routes/todo');
const cors = require('cors');
//step4 middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//step3
app.use('/api', todoRouter);

//step2
app.listen(5000, () => console.log('server is running on port 5000!!!'));
