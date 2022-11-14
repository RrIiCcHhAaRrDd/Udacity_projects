/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=13614da2240ac51a3e2fa6ee38fbb520&units=imperial';


//POST request
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }

}

document.getElementById('generate').addEventListener('click', callBack);


function callBack(e) {
    const userResponse = document.getElementById('feelings').value;
    const newZip = document.getElementById('zip').value;
    // request to API
    getWeather(baseURL, newZip, apiKey)
        //POST data
        .then(function (data) {
            console.log(data)
            postData('', { temperature: data.main.temp, date: newDate, userResponse: userResponse })
        })
        .then(
            setTimeout(() => { // prevents empty object printed to app
                updateUI()
            }, 5000)
            
        )
}


//this updates the UI with data from API
const updateUI = async () => {
    const request = await fetch('/all'); // this receives API data from get route
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML = "The Temperature: " + allData.temperature + "°F";
        document.getElementById('date').innerHTML = "Date: " + allData.date;
        document.getElementById('content').innerHTML = "Feelings of the day: " + '"' + allData.userResponse + '"';
    }
    catch (error) {
        console.log('error', error);
    }
}


// Here is a GET request to the openweather API
const getWeather = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + key)
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error', error);
    }
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
