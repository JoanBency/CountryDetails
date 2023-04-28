const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');
const path = require("path");

const countryRoute = require('./Routes/country');

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use('/api/country', countryRoute);

const port = process.env.PORT || 8080;

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});