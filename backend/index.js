const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');

const countryRoute = require('./Routes/country');

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use('/api/country', countryRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});