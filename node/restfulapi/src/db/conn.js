const mongoose = require("mongoose");
var dotenv = require("dotenv")
// mongoose.connect("mongodb://localhost:27017/packages-api", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('connection is successful');
// }).catch(() => {
//     console.log('invalid connection');
// })
// console.log(process.env.MongoDBUri)
dotenv.config();

mongoose.connect(process.env.MongoDBUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected'))
    .catch(error => {
        console.log(error, 'invalid connection')
    })