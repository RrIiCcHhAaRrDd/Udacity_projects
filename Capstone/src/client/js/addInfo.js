function addInfo (event) {
    event.preventDefault()

    const infoForm = document.getElementsByClassName('addInfo')
    const infoFormData = new FormData(infoForm[0])
    const infoFormData2 = new FormData(infoForm[1])

    let hotelInfo = Array.from(infoFormData)[0][1]
    let flightInfo = Array.from(infoFormData2)[0][1]


    const hotelh2 = document.createElement('h2')
    hotelh2.setAttribute('class',"subtitle")
    hotelh2.innerText = `Hotel Information:${hotelInfo}`

    const flighth2 = document.createElement('h2')
    flighth2.setAttribute('class', 'subtitle')
    flighth2.innerText = `Flight Information:${flightInfo}`
    
    const HotelFlightDiv = document.getElementById('HotelFlightDiv')

    if (HotelFlightDiv.innerHTML === ""){
        HotelFlightDiv.append(hotelh2, flighth2)
    }
    else {
        while (HotelFlightDiv.firstChild) {
            HotelFlightDiv.removeChild(HotelFlightDiv.lastChild);
        }
        HotelFlightDiv.append(hotelh2, flighth2)

    }
 

}


export { addInfo }