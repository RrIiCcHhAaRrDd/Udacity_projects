// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

/*  Notice, the callback function of the GET request takes two parameters, 
 arbitrarily named req and res in this example. Every GET request 
 produces a request, which is the data provided by the GET request, 
 and a response, which is the data returned to the GET request. 
 Below, you can see the long list of information that comes with each GET request:
*/
app.get("/all", function (req, res) {
    res.send(projectData);
    console.log(projectData);
})

//POST route - this sends objects to endpoint

app.post('/', addJournalEntry);

function addJournalEntry(req, res) {
    console.log(req.body)

    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }

    projectData = newEntry
    res.send(projectData)
}
