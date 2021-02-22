const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');   

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established succesfully');
})

const astronautRouter = require('./routes/astronauts');

app.use('/', astronautRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));