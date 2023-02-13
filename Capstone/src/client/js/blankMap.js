const blankMapfn = async () => {

    const data = await fetch('/keys')
    const res1 = await data.json()
    const mapBoxKey = "res1.MAP_API_KEY"

    const img = document.createElement('img');
    img.setAttribute('id', "mapImg")
    try {
        console.log()
        img.src = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/[-154,-49,193.2738,69.4894]/1200x450@2x?&logo=false&access_token=${mapBoxKey}`
        console.log(`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/[-154,-49,193.2738,69.4894]/1200x450@2x?&logo=false&access_token=${mapBoxKey}`)
        document.getElementById("map").appendChild(img)
    }

    catch (error) {
        console.log('error', error);
        alert("Could not load destinations on map")
    }

}

document.addEventListener('load', blankMapfn())


export { blankMapfn }