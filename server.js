const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');   

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Lukr:Langeer425401477@taskappcluster.96ojv.mongodb.net/ORBIT_DB?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established succesfully');
})

const astronautRouter = require('./routes/astronauts');

app.use('/', astronautRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));