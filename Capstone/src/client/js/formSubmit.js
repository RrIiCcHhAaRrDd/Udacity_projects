const formSubmit = async (event) => {
    event.preventDefault()

    const url1 = "/keys"
    const res1 = await fetch(url1)
    const data1 = await res1.json()

    const geonamesUsername = "rriicchhaarrdd"

    const form = document.querySelector('form')
    const formData = new FormData(form);

    console.log(Array.from(formData))

    let searchDestination = Array.from(formData)[0][1];
    let startDate = Array.from(formData)[1][1];
    startDate = startDate.split("-").reverse().join("-");

    let endDate = Array.from(formData)[2][1];
    endDate = endDate.split("-").reverse().join("-")

    const res = await fetch(`http://api.geonames.org/searchJSON?q=${searchDestination}&fuzzy=0.8&username=${geonamesUsername}`)
    
    try {
        const data = await res.json();
        console.log(data)
        Client.postData('/addObject', { latitude: data.geonames[0].lat, longitude: data.geonames[0].lng, destination: data.geonames[0].name, country: data.geonames[0].countryName, startDate: startDate, endDate: endDate });
        Client.destinationPic(data.geonames[0].name, data.geonames[0].countryName, startDate, endDate);
        Client.slide('next');
        Client.weather(data.geonames[0].lat, data.geonames[0].lng, Array.from(formData)[1][1], Array.from(formData)[2][1]);  
    }

    catch (error) {
        console.log('error', error);alert("The entered destination could not be found, please re-enter")
    }
   
}

export { formSubmit }