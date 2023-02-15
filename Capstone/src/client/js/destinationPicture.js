const destinationPic = async (destination, country, startDate, endDate) => {

    const res2 = await fetch('/keys')
    const data2 = await res2.json()

    const pixabayKey = data2.PIXABAY_KEY

    const res3 = await fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${destination}&category=places`)
    
    try {

        const data3 = await res3.json()
        let destinationApi = data3.hits[0].webformatURL
        document.getElementById('destImage').setAttribute('src', '')
        setTimeout(() => {
            document.getElementById('destImage').src = destinationApi;
        }, 500)
        document.getElementById('destinationName').innerText = destination + ", " + country;
        document.getElementById('tripDate').innerText = `Arriving: ${startDate} Departing: ${endDate}`

    }

    catch(error) {
        console.log('error', error);
        alert("the destination image could not be found")
        document.getElementById('destImage').src = "https://cdn.pixabay.com/photo/2018/03/23/22/10/question-mark-3255136_960_720.jpg";
        document.getElementById('destinationName').innerText = destination + ", " + country;
        document.getElementById('tripDate').innerText = `Arriving: ${startDate} Departing: ${endDate}`
    }
    
}

export { destinationPic }