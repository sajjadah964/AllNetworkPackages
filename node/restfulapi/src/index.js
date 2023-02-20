const express = require("express");
require("./db/conn");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const port = process.env.PORT || 8000;

// defining the Express app
const app = express();
app.use(express.json());

// Configuring body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adding Helmet to enhance your Rest API's security
app.use(helmet());
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

// jazz Call Routes 
const jazzCallRoutes = require("./routes/jazzCallRoutes")
app.use(jazzCallRoutes);

// jazz Internet Routes 
const jazzInternetRoutes = require("./routes/jazzInternetRoutes")
app.use(jazzInternetRoutes);

// const telenorRoutes = require("./routes/telenorRoutes")
// app.use(telenorRoutes);

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, auth-token");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})