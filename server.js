const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()


const HOST = process.env.MONGODB_HOST;
const PORT = process.env.MONGODB_PORT;
const DATABASE = process.env.MONGODB_DATABASE;

const mongoURLCloud = "mongodb+srv://dbUserAdmin:dbPassword@clusternam-e3fz5.mongodb.net/BookStoreDB"
const mongoURLLocal = 'mongodb://localhost:27017/BookStoreDB'
mongoose.connect(mongoURLLocal, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.log(err)
    console.log('success connect')
})

const productRoute = require('./routes/product')
const transactionRoute = require('./routes/transaction')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const app = express()
app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {res.send("I have changed the world!")})

app.use('/tran', transactionRoute)
app.use('/user', userRoute)
app.use('/prod', productRoute)
app.use('/auth', authRoute)

app.listen(4000, () => {
    console.log("Im listening!")
})