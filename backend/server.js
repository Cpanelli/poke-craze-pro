const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the PokeCrazePro API!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
