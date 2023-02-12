const weather = async (latitude, longitude, startDate, endDate) => {

    const res2 = await fetch('/keys');
    const data2 = await res2.json();
    startDate = startDate.slice(4, startDate.length)
    endDate = endDate.slice(4, endDate.length)

    const weatherAPI = "a7627e43fb114497a78d9703f0a4c438"
    const res3 = await fetch(`https://api.weatherbit.io/v2.0/history/daily?&lat=${latitude}&lon=${longitude}&start_date=2022${startDate}&end_date=2022${endDate}&days=7&key=${weatherAPI}`)

    try {
        const data3 = await res3.json();

        console.log(data3)
        function tempArray() {
            let temps = []
            for (var i = 0; i < 7; i++) {
                let forecastDate = data3.data[i].datetime
                forecastDate = forecastDate.split("-").reverse().join("-")
                forecastDate = forecastDate.slice(0, 5)
                forecastDate = forecastDate.replace("-", "/")
                temps.push(forecastDate)
                temps.push(data3.data[i].min_temp + "°c")
                temps.push(data3.data[i].max_temp + "°c")
            }
            return temps
        }

        let tempArrayValues = tempArray()

        function setForecast() {
            let min = document.createElement('h2')
            min.setAttribute('id', "min")
            min.innerText = "min"
            let weatherGrid = document.getElementById('weatherGrid')
            weatherGrid.append(min);
            let max = document.createElement('h2')
            max.setAttribute('id', "max")
            max.innerText = "max"
            weatherGrid.append(max);
            for (var i = 0; i < tempArrayValues.length; i++) {
                let name = "forecast_" + [i]
                let child = document.createElement('h3')
                child.setAttribute('id', name)
                weatherGrid.append(child);
                child.innerText = tempArrayValues[i]
            }
            
        }
        setForecast()

    }
    catch (error) {
        console.log('error', error);
        alert("weather information could not be retrieved")
    }
}

export { weather }