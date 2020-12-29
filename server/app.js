const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const mongoose = require('mongoose');
const mongokeys = require('./config/keys');

mongoose.connect(mongokeys.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
})
mongoose.connection.on('error', (err) => {
    console.log('error connecting', err);
});

require('./config/models/usermodel');

const customMiddleware = (req,res,next) => {
    console.log('object');
    next();
}

app.get('/',customMiddleware,(req,res) => {
    res.send('Hello!');
});

app.get('/about',(req,res) => {
    res.send('Hello2!');
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));