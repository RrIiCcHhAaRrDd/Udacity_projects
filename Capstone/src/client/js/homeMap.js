const map = async () => {

    const res1 = await fetch('/keys')
    const data1 = await res1.json()

    const res2 = await fetch('/getObject')
    const data2 = await res2.json()
    const mapBoxKey = "data1.MAP_API_KEY"

    function latLonFunction() {
        let string ='';
        for (var i = 0; i < data2[0].length; i++) {
            console.log(data2[0].length)
            let no = i +1;
            string += `,pin-s-${no}+f50000`
            string += `(${data2[0][i].longitude},`
            string += `${data2[0][i].latitude})`
        }    
        return string       
    }

    try {
        let mapURL = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${latLonFunction()}/[-154,-49,193.2738,69.4894]/1200x450@2x?&logo=false&access_token=${mapBoxKey}`
        mapURL = mapURL.slice(0,60) + mapURL.slice(61, mapURL.length)
        document.getElementById("mapImg").setAttribute('src', mapURL)
    }
    catch (error) {
        console.log('error', error);
        alert("Could not load destinations on map")
    }
}

export { map }