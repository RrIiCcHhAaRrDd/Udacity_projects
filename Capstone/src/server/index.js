const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const cors = require('cors')
const app = express()

var projectData = []

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

const path = require('path')

app.use(express.static('dist'))

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
    //console.log(`Example app listening on port ${port}!`)
}

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html')) // this is correct
})

app.get('/getObject', function (req, res) {
    //console.log("get req worked")
    res.send([projectData])
    //console.log([projectData])
})


app.post('/addObject', function (req, res) {
    //console.log(req.body)

    TripInfo = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        destination: req.body.destination,
        country: req.body.country,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    }

    projectData.unshift(TripInfo)
    projectData.sort(
        (p1, p2) =>
            (p1.startDate > p2.startDate) ? 1 : (p1.startDate < p2.startDate) ? -1 : 0);
    res.send([projectData])
    //console.log(projectData)
})

app.get('/keys', function (req, res) {
    let data = {
        GEONAME_USER: process.env.GEONAME_USER,
        MAP_API_KEY: process.env.MAP_API_KEY,
        PIXABAY_KEY: process.env.PIXABAY_KEY,
        WEATHERBIT_API: process.env.WEATHERBIT_API
    }
    res.send(data)
})

app.get('/removeEntry', function (req, res) {
    //console.log("removed last entry")
    projectData.pop()
    res.sendStatus(200)

})

app.get('/removeEntries', function (req, res) {
    //console.log("all trips removed")
    projectData = []
    res.sendStatus(200)
})


module.exports = app 