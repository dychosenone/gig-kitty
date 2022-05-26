const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
var cors = require('cors')

// routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true }, 
    () => {
    console.log('Connected to Mongo DB')
});

// cors portion
app.use(cors())

app.get('http://localhost:3000/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})

//middleware portion
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
    console.log('Backend server is running')
})